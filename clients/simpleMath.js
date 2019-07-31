const { Stub } = require( 'firecomm' );
const package = require( '../package.js' )
const arrayStub = new Stub( 
	package.SimpleMath, 
	'localhost: 3000',
);
let reqArray = [0];
const clientStream = arrayStub.clientToServer((err, res) => {
  if (err) throw(err);
  console.log('response from server:', res);
});
let count = 0;
let timer = setInterval(() => {
  count += 1;
  reqArray.push(count);
  clientStream.write({millions: reqArray})
}, 1);
setTimeout(() => {
  clearInterval(timer);
}, 5000)
arrayStub.unaryMath({num: 1});

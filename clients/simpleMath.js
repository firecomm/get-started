const { Stub } = require( 'firecomm' );
const package = require( '../package.js' )
const simpleStub = new Stub( 
	package.SimpleMath, 
	'localhost: 3000',
  );
simpleStub.unaryMath({num: 1}, {hello: 'world'}, (err, res) => {
  if (err) throw(err);
  console.log('response from server:', res);
});
let reqArray = [0];
const clientStream = simpleStub.clientToServer((err, res) => {
  if (err) throw(err);
  console.log('response from server:', res);
});
let count = 1;
let timer = setInterval(() => {
  reqArray.push(count);
  clientStream.write({numArrays: reqArray})
}, 1);
setTimeout(() => {
  clearInterval(timer);
}, 5000)

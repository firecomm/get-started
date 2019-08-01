const { Stub } = require( 'firecomm' );
const package = require( '../package.js' )
const simpleStub = new Stub( 
	package.SimpleMath, 
	'localhost: 3000',
  );
simpleStub.unaryMath({num: 1}, (err, {num}) => {
  if (err) throw(err);
  console.log('unary:', num);
});
let reqArray = [0];
const clientStream = simpleStub.clientToServer((err, res) => {
  if (err) throw(err);
  console.log('clientStream:', res);
});
let count = 1;
let timer = setInterval(() => {
  reqArray.push(count);
  clientStream.write({numArray: reqArray})
}, 1);
setTimeout(() => {
  clearInterval(timer);
}, 1000);
simpleStub.serverToClient({num: 1}, (err, {num}) => {
  if (err) throw(err);
  console.log('unary:', num);
});

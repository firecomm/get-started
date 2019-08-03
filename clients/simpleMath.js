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

const clientStream = simpleStub.clientToServer((err, res) => {
  if (err) throw(err);
  console.log('clientStream:', res);
});
let reqArray = [];
let count = 1;
let timer = setInterval(() => {
  reqArray.push(count);
  clientStream.write({numArray: reqArray, corpus: 2})
}, 1);
setTimeout(() => {
  clearInterval(timer);
}, 1000);
// const serverStream = simpleStub.serverToClient({num: 1000000});
//   serverStream.on('data', ({numArray}) => {
//     finalNum += numArray.reduce((total, item) => total + item);
//   })

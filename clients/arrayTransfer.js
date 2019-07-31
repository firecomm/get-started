const { Stub } = require( 'firecomm' );
const package = require( '../package.js' )
const arrayStub = new Stub( 
	package.ArrayTransfer, 
	'localhost: 3000',
);
const clientStream = arrayStub.clientToServer((err, res) => {
  if (err) throw(err);
  console.log(res);
});
let count = 0;
const timer = setInterval(() => {
  count += 1;
  clientStream.write({arrays: [count, count + 1]})
}, 1);

const serverStream = arrayStub.serverToClient({ 
  confirm: null,
  comment: 'request from client: the server stream should start',
  arrays : [0, 1],
});
  let reqArray = [];
  serverStream.on('data', (array) => {
    console.log(reqArray)
    reqArray = reqArray.concat(array);
  })
  serverStream.on('end', () => {
    console.log(reqArray)
    onClientStream.send();
  })
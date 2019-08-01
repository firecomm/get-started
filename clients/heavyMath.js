const { Stub } = require( 'firecomm' );
const package = require( '../package.js' )
const bidiStub = new Stub( 
	package.HeavyMath, 
	'localhost: 2999',
);
const bidiStream = bidiStub.bidiMath();
bidiStream.write({num: 2});
bidiStream.on('data', ({num}) => {
  bidiStream.write({num: num*1.1});
})
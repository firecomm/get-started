const { Server } = require( 'firecomm' );
const package = require( '../package.js' );
const { UnaryMathHandler,
	ClientToServerHandler } = require( './simpleMathHandlers.js' );
// const { UnaryMathHandler,
// 	BidiMathHandler } = require( './heavyMathHandlers.js' );

const server = new Server();
server.addService( package.SimpleMath,   {
  unaryMath:  UnaryMathHandler,
  clientToServer: ClientToServerHandler,
});
// server.addService( package.HeavyMath,   { 
//   UnaryMath: UnaryMathHandler,
//   BidiMath: BidiMathHandler,
// });
server.bind( [ 
  '0.0.0.0: 3000', 
  '0.0.0.0: 2999', 
] );
server.start();
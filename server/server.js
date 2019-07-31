const { Server } = require( 'firecomm' );
const package = require( '../package.js' );
const { ClientToServerHandler,
	ServerToClientHandler } = require( './arrayTransferHandlers.js' );
// const { UnaryMathHandler,
// 	BidiMathHandler } = require( './heavyMathHandlers.js' );

const server = new Server();
server.addService( package.ArrayTransfer,   { 
  clientToServer: ClientToServerHandler,
  serverToClient: ServerToClientHandler,
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
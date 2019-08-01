const { Server } = require( 'firecomm' );
const package = require( '../package.js' );
const { 
  UnaryMathHandler,
  ClientToServerHandler, 
  ServerToClientHandler, 
} = require( './simpleMathHandlers.js' );
const { BidiMathHandler } = require( './heavyMathHandlers.js' );

const server = new Server();
server.addService( package.SimpleMath,   {
  unaryMath:  UnaryMathHandler,
  clientToServer: ClientToServerHandler,
  // serverToClient: ServerToClientHandler,
});
server.addService( package.HeavyMath,   { 
  BidiMath: BidiMathHandler,
});
server.bind( [ 
  '0.0.0.0: 3000', 
  '0.0.0.0: 2999',
] );
server.start();
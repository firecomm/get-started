ClientToServerHandler( onClientStream ) {
  onClientStream.send({ 
    response: value 
  });
};
ServerToClientHandler( CALL ) {
  CALL.on('data', request => someFunctionality(request));
  CALL.send({ response: value });
};
module.exports = { 
	ClientToServerHandler,
	ServerToClientHandler,
}
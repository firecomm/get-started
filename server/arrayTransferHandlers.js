ClientToServerHandler( onClientStream ) {
  let resArray = [];
  onClientStream.on('data', (array) => {
    resArray = resArray.concat(array);
  })
  onClientStream.on('end', () => {
    onClientStream.send({ 
      status: true,
      comments: 'response from server: the client stream is complete',
      array : resArray,
    });
  })
};
ServerToClientHandler( onClientCall ) {
  let count = 0;
  const timer = setInterval(() => {
    count += 1;
    onClientCall.write({array: [count, count / 2]})
  }, 1);
  setTimeout(() => {
    clearInterval(timer);
  }, 5000);
};
module.exports = { 
	ClientToServerHandler,
	ServerToClientHandler,
}
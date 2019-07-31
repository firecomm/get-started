let resArray = [0, 1];
function ClientToServerHandler(onClientStream){
  onClientStream.on('data', ({millions}) => {
    resArray = resArray.concat(millions);
  })
  setTimeout(() => {
    console.log(
      'server response:', 
      null,
      'response from server: the client stream is complete',
      resArray,
    );
    onClientStream.send({ 
      confirm: null,
      comment: 'response from server: the client stream is complete',
      responses : resArray,
    });
  }, 5000)
};
function ServerToClientHandler(onClientCall){
  let count = 0;
  const timer = setInterval(() => {
    count += 1;
    resArray[0] = count;
    onClientCall.write({arrays: resArray})
  }, 1);
  setTimeout(() => {
    clearInterval(timer)
  }, 5000)
};
module.exports = { 
	ClientToServerHandler,
	ServerToClientHandler,
}
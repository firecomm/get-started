function ClientToServerHandler(onClientStream){
  let resArray = [];
  onClientStream.on('data', (array) => {
    console.log({resArray})
    resArray = resArray.concat(array);
  })
  onClientStream.on('end', () => {
    onClientStream.send({ 
      confirm: null,
      comment: 'response from server: the client stream is complete',
      arrays : resArray,
    });
  })
};
function ServerToClientHandler( onClientCall ){
  let count = 0;
  const timer = setInterval(() => {
    count += 1;
    onClientCall.write({arrays: [count, count + 1]})
  }, 1);
};
module.exports = { 
	ClientToServerHandler,
	ServerToClientHandler,
}
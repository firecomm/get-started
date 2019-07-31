function UnaryMathHandler(unary) {
  res = unary.req.data.num + 1;
  unary.send({num: res});
}
let resArr = [];
function ClientToServerHandler(clientStream) {
  clientStream.on('data', ({millions}) => {
    resArr = resArr.concat(millions);
  })
  setTimeout(() => {
    clientStream.send({ 
      confirm: true,
      comment: 'response from server: the client stream is complete',
      responses : resArr,
    });
  }, 5000)
};
module.exports = { 
	UnaryMathHandler,
	ClientToServerHandler,
}
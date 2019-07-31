function UnaryMathHandler(unary) {
  console.log(unary)
  setTimeout(() => unary.send({num: 1 + 1}, 1000));
}
let resArr = [];
function ClientToServerHandler(clientStream) {
  clientStream.on('data', ({numArrays}) => {
    resArr = resArr.concat(numArrays);
  })
  setTimeout(() => {
    clientStream.send({ 
      completed: true,
      serverResponse: `client stream is complete after 5 seconds`,
      arrayItemsSent : resArr.reduce((total, item) => {
        return total + item;
      }),
    });
  }, 5000)
};
module.exports = { 
	UnaryMathHandler,
	ClientToServerHandler,
}
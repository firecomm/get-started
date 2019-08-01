function UnaryMathHandler(unary) {
  unary.send({num: 1 + 1})
}
let resArr = [];
function ClientToServerHandler(clientStream) {
  clientStream.on('data', ({numArray}) => {
    resArr = resArr.concat(numArray);
  })
  setTimeout(() => {
    clientStream.send({ 
      completed: true,
      serverResponse: `client stream is complete after 1 second`,
      arrayItemsStreamed : resArr.reduce((total, item) => {
        return total + item;
      }),
    });
  }, 1000)
};
// function ServerToClientHandler(clientCall){
//   let num = clientCall.body.arrayItemsStreamed;
//   const timer = setInterval(() => {
//     num += 1;
//     resArray = num;
//     clientCall.write({arrays: resArray})
//   }, 1);
//   setTimeout(() => {
//     clearInterval(timer)
//   }, 5000)
// };
module.exports = { 
	UnaryMathHandler,
  ClientToServerHandler,
  // ServerToClientHandler,
}
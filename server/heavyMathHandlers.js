let count = 0;
let start;
function BidiMathHandler(bidi) {
  bidi.on('data', ({num}) => {
    if (count === 0) start = Number(process.hrtime.bigint());
    count += 1;
    bidi.write({num: num*1.1});
  })
  bidi.on('end', () => {
    const end = Number(process.hrtime.bigint());
    console.log(
      'finalNumberOfRequests:', count);
    console.log(
      'avg millisecond speed per request:', ((end - start) /1000000) / count
      );
    count = 0;
  })
}

module.exports = { 
	BidiMathHandler,
}
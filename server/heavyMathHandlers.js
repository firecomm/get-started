let start;
let end;
function BidiMathHandler(bidi) {
  bidi.on('data', ({req, res}) => {
    if (req === 1) {
      start = Number(process.hrtime.bigint());
      console.log(
        'first request received from client stub',
      )
    }
    bidi.write({req: req, res: res + 1});
    if (req % 1000000 === 0) {
      end = Number(process.hrtime.bigint());
    console.log(
      'number of requests:', req,
      '\navg millisecond speed per request:', ((end - start) /1000000) / req
      );
    }
  })
}

module.exports = { 
	BidiMathHandler,
}
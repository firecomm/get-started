// /clients/chattyMath.js
const { Stub } = require( 'firecomm' );
const package = require( '../proto/package.js' )
const stub = new Stub( 
  package.ChattyMath, 
  'localhost: 3000',
);

let start;
let end;
let perRes;
let perSec;
const bidi = stub.bidiMath({thisIsMetadata: 'let the races begin'})
  .send({requests: 1, responses: 0})
  .on( 'metadata', (metadata) => {
    start = Number(process.hrtime.bigint());
    console.log(metadata.getMap()) // maps the special metadata object as a simple Object
  })
  .on( 'error', (err) => console.error(err))
  .on( 'data', (benchmark) => {
    bidi.send(
      {
        requests: benchmark.requests + 1, 
        responses: benchmark.responses
      }
    )
    if (benchmark.responses % 10000 === 0) {
      end = Number(process.hrtime.bigint());
      perRes = ((end - start) /1000000) / benchmark.responses; // nanoseconds to milliseconds averaging total responses
      perSec = 1 / (perRes / 1000); // inverting milliseconds per response to responses per second
    console.log(
      // 'server address:', bidi.getPeer(),
      '\ntotal number of responses:', benchmark.responses,
      '\navg millisecond speed per response:', perRes,
      '\nresponses per second:', perSec,
    )
  }
});
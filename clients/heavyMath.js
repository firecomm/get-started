const { Stub } = require( 'firecomm' );
const package = require( '../package.js' )
const bidiStub = new Stub( 
	package.HeavyMath, 
	'localhost: 2999',
);
let start;
let end;
const bidiStream = bidiStub.bidiMath();
bidiStream.write({req: 1, res: 0});
bidiStream.on('data', ({req, res}) => {
	if (res === 1) {
		start = Number(process.hrtime.bigint());
		console.log(
			'first response received from server',
		)
	}
		bidiStream.write({req: req + 1, res: res});
	if (res % 1000000 === 0) {
		end = Number(process.hrtime.bigint());
		console.log(
			'number of responses:', res,
			'\navg millisecond speed per response:', ((end - start) /1000000) / res,
		)
	}
});
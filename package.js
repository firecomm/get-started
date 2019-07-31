const { build } = require('firecomm');
const path = require('path');

const PROTO_PATH = path.join(__dirname, './proto/exampleAPI.proto')
const package = build(PROTO_PATH);

module.exports = package;
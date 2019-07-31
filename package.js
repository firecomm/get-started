const { build } = require('firecomm');
const path = require('path');

const PROTO_PATH = path.join(__dirname, './proto/exampleAPI.proto')
const CONFIG_OBJECT = {
  keepCase: true, // keeps everything camelCased
  longs: Number, // transpiles the enormous `double`s for our HeavyMath into a javascript Number rather than a String
}
const package = build( PROTO_PATH, CONFIG_OBJECT );

module.exports = package;
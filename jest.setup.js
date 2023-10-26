const { TextEncoder, TextDecoder } = require('text-encoding');
const server = require('./server/server.js');
import regeneratorRuntime from 'regenerator-runtime';


// Apply the polyfill globally
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// module.exports = () => {
//   global.testServer = require('./server');
// };

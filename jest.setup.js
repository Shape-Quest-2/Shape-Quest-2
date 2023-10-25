const { TextEncoder, TextDecoder } = require('text-encoding');

// Apply the polyfill globally
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
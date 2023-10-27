import regeneratorRuntime from 'regenerator-runtime';

module.exports = () => {
  global.server = require('./server/server.js');
};

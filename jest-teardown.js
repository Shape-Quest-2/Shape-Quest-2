module.exports = async (globalConfig) => {
  console.log('tearing down!');
  server.close();
};

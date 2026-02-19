module.exports = (client) => {
  client.once('ready', () => {
    // eslint-disable-next-line no-console
    console.log(`Logged in as ${client.user?.tag || 'unknown user'}`);
  });
};

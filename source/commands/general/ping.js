module.exports = {
  name: 'ping',
  aliases: ['p'],
  run: async (_client, message) => {
    await message.channel.send({ content: 'pong' });
  },
};

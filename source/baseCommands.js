const { MessageEmbed } = require('discord.js');

const helpMenu = new MessageEmbed()
  .setTitle('Poketwo Autocatcher (Local Scaffold)')
  .setDescription('Base help menu scaffold loaded successfully.')
  .setColor('#5865F2');

function pokelogger() {
  return null;
}

function notifications() {
  return null;
}

function refresh() {
  return null;
}

function delay() {
  return null;
}

module.exports = {
  pokelogger,
  notifications,
  helpMenu,
  refresh,
  delay,
};

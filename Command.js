require('colors');
const { readdirSync, statSync } = require('fs');

const ascii = require('ascii-table');

const table = new ascii('Commands List'.black);
table.setHeading('Commands'.red, 'Status'.green);

module.exports = (client) => {
  const commandsRoot = './source/commands';
  const commandDirs = readdirSync(commandsRoot).filter((entry) =>
    statSync(`${commandsRoot}/${entry}`).isDirectory()
  );

  for (const dir of commandDirs) {
    const dirPath = `${commandsRoot}/${dir}`;
    const commands = readdirSync(dirPath).filter((file) => file.endsWith('.js'));

    for (const file of commands) {
      const pull = require(`${dirPath}/${file}`);

      if (pull.name) {
        client.commands.set(pull.name, pull);
        table.addRow(file, '✅');
      } else {
        table.addRow(file, '❌  -> missing command.name, or command.name is not a string.');
        continue;
      }

      if (pull.aliases && Array.isArray(pull.aliases)) {
        pull.aliases.forEach((alias) => client.aliases.set(alias, pull.name));
      }
    }
  }

  console.log(table.toString());
};

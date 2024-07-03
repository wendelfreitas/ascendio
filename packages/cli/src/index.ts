import { create } from './commands/create';
import { Command } from 'commander';

import { PACKAGE, VERSION } from './utils/constants';

function main() {
  const program = new Command()
    .name(PACKAGE)
    .description('A simple CLI template')
    .version(VERSION);

  program.addCommand(create);

  program.parse(process.argv);
}

main();

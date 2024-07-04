import { create } from './commands/create';
import { Command } from 'commander';

import { PACKAGE, VERSION } from './utils/constants';

function main() {
  const program = new Command()
    .name(PACKAGE)
    .description(
      'An CLI designed to simplify the initial setup of your turborepo project. Ideal for indie developers or people looking to create a micro SaaS.'
    )
    .version(VERSION);

  program.addCommand(create);

  program.parse(process.argv);
}

main();

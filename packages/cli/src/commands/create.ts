import * as p from '@clack/prompts';
import { Command } from 'commander';
import {
  COMPONENTS,
  DEFAULT_APPLICATION_NAME,
  DESCRIPTION,
  HELLO_ASCENDIO,
  TITLE,
} from '../utils/constants';
import { scaffold } from '../utils/helpers/scaffold';
import { logger } from '../utils/logger';
import { getAllComponents } from '../utils/helpers/get-all-components';
import { prerequisites } from '../utils/helpers/verify-versions';
import chalk from 'chalk';
import path from 'path';

export const create = new Command()
  .name('create')
  .description('Start the interactive CLI to create a Ascendio project.')
  .action(async () => {
    await run();
  });

export async function run() {
  await prerequisites();

  p.intro(HELLO_ASCENDIO);

  p.note(DESCRIPTION, TITLE);

  const questions = await p.group(
    {
      name: () =>
        p.text({
          message: 'What will be the project name?',
          defaultValue: DEFAULT_APPLICATION_NAME,
          placeholder: DEFAULT_APPLICATION_NAME,
          validate: (value) => {
            if (!value.length) return `Project name is required`;

            if (!/^[a-zA-Z0-9-_]+$/.test(value))
              return 'Project name cannot contain accents, special characters or spaces.';
          },
        }),

      apps: () =>
        p.multiselect({
          required: false,
          message: `Which additional apps do you want to add? ${chalk.gray('(Press A to add/remove all or Enter to submit)')}`,
          options: [
            {
              label: `Documentation`,
              value: 'docs',
              hint: 'Create a project using Nextra to write your own documentation',
            },
          ],
        }),

      packages: () =>
        p.multiselect({
          required: false,
          message: `Which additional packages do you want to add? ${chalk.gray('(Press A to add/remove all or Enter to submit)')}`,
          options: [
            {
              label: `CLI`,
              value: 'cli',
              hint: 'A simple and small package to create your own CLI app',
            },
          ],
        }),

      addons: () =>
        p.multiselect({
          required: false,
          message: `Which addons do you want to add? ${chalk.gray('(Press A to add/remove all or Enter to submit)')}`,
          options: [
            {
              label: `Jest`,
              value: 'tests',
              hint: 'Ascendio will set up everything using Jest, including adding some default tests.',
            },
            {
              label: 'Storybook',
              value: 'storybook',
              hint: 'Ascendio will set up everything related to Storybook, including adding some default stories.',
            },
          ],
        }),

      components: () =>
        p.multiselect({
          required: false,
          initialValues: Object.keys(COMPONENTS),
          message: `Which components do you want to add to your UI package? ${chalk.gray('(Press A to add/remove all or Enter to submit)')}`,
          options: Object.keys(COMPONENTS).map((component) => ({
            label: component,
            value: component,
          })),
        }),
    },
    {
      onCancel() {
        process.exit(1);
      },
    }
  );

  const project = {
    name: questions.name,
    directory: path.resolve(process.cwd(), questions.name),
    apps: questions.apps.map((value) => String(value)),
    packages: questions.packages.map((value) => String(value)),
    addons: questions.addons.map((value) => String(value)),
    components: getAllComponents(questions.components),
  };

  await scaffold(project);

  logger.log(` cd ${project.name}\n pnpm install\n pnpm run dev`);

  logger.info(`\n Happy Coding!`);
}

import * as p from '@clack/prompts';
import { Command } from 'commander';
import ora from 'ora';
import {
  COMPONENTS,
  DEFAULT_APPLICATION_NAME,
  DESCRIPTION,
  HELLO_ASCENDIO,
  PACKAGE,
  TITLE,
} from '../utils/constants';
import { scaffold } from '../utils/helpers/scaffold';
import chalk from 'chalk';
import { logger } from '../utils/logger';
import path from 'path';
import { getAllComponents } from '../utils/helpers/get-all-components';

const spinner = ora({
  text: 'Loading...',
  color: 'yellow',
});

const authenticate = async () => {
  p.note(
    `Let's authenticate first to check your license before creating your awesome project.`,
    'Authenticate to Ascendio'
  );

  const questions = await p.group(
    {
      email: () =>
        p.text({
          message: 'Email',
        }),
      password: () => {
        return p.password({
          message: 'Password',
        });
      },
    },
    {
      onCancel() {
        process.exit(1);
      },
    }
  );

  spinner.start('Authenticating...');
  await new Promise((res) => setTimeout(res, 2000));
  spinner.succeed(`Authenticated`);
};

export const create = new Command()
  .name('create')
  .description('An example command')
  .action(async () => {
    await run();
  });

export async function run() {
  p.intro(HELLO_ASCENDIO);

  // await authenticate();

  p.note(DESCRIPTION, TITLE);

  const questions = await p.group(
    {
      name: () =>
        p.text({
          message: 'What will be the project name?',
          defaultValue: DEFAULT_APPLICATION_NAME,
          placeholder: DEFAULT_APPLICATION_NAME,
          validate: (value) => {
            if (!Boolean(value.length)) return `Project name is required`;

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
          initialValues: COMPONENTS,
          message: `Which components do you want to add to your UI package? ${chalk.gray('(Press A to add/remove all or Enter to submit)')}`,
          options: COMPONENTS.map((component) => ({
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

import path from 'path';
import chalk from 'chalk';
import fs from 'fs-extra';
import ora from 'ora';
import { PACKAGE_ROOT, VERSION } from '../constants';
import { getAllFilePaths } from './get-all-file-paths';
import { replaceWordInFiles } from './replace-word-in-files';
import { checkIfExists } from './check-if-project-exists';
import { Project } from '../types';
import { cleanProject } from './clean-project';
import { removeUnusedAddons } from './remove-unused-addons';
import { createComponentsIndexFile } from './create-components-index-file';
import { removeUnusedDependencies } from './remove-unused-dependencies';
import { removeUnusedComponents } from './remove-unused-components';
import cmd from 'node-cmd';

export const scaffold = async (project: Project) => {
  const template = path.join(PACKAGE_ROOT, 'template/daito');

  const spinner = ora(
    `Creating and ascending a awesome project in: ${project.directory}...\n`
  ).start();

  const exists = await checkIfExists({ projectDir: project.directory });

  if (exists) {
    spinner.fail(
      `${chalk.redBright.bold('Whoops!')} The project ${chalk.cyan.bold(
        project.name
      )} already exists and isn't empty. \n`
    );

    process.exit(1);
  }

  cmd.runSync(
    `cd ${path.join(PACKAGE_ROOT, 'template')} && git clone https://github.com/wendelfreitas/daito`
  );

  fs.copySync(template, project.directory);

  fs.rmSync(template, {
    recursive: true,
    force: true,
  });

  cleanProject(project);

  const filePaths = getAllFilePaths(project.directory);

  await replaceWordInFiles(filePaths, 'ascendio', `${project.name}`);

  removeUnusedComponents(project);

  removeUnusedAddons(project, filePaths);

  await removeUnusedDependencies(project);

  createComponentsIndexFile(project);

  fs.writeFile(
    `${project.directory}/ascendio.json`,
    JSON.stringify({
      version: VERSION,
      apps: project.apps,
      packages: project.packages,
      components: project.components,
    }),
    'utf8'
  );

  spinner.succeed(
    `${chalk.cyan(project.name)} ${chalk.green('created successfully!')}\n`
  );
};

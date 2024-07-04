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

function renameFilesAsync(
  allFiles: string[],
  filesToRename: string[],
  directory: string
) {
  allFiles.forEach((file) => {
    if (filesToRename.includes(file)) {
      const oldPath = path.join(directory, file);
      const newPath = path.join(directory, file.replace(/^_/, '.'));
      fs.rename(oldPath, newPath, (err) => {
        if (err) {
          console.error(`Error renaming ${oldPath} -> ${newPath}:`, err);
        } else {
          console.log(`Renamed: ${oldPath} -> ${newPath}`);
        }
      });
    }
  });
}

export const scaffold = async (project: Project) => {
  const template = path.join(PACKAGE_ROOT, 'template');

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

  fs.copySync(template, project.directory);

  cleanProject(project);

  const filePaths = getAllFilePaths(project.directory);

  replaceWordInFiles(filePaths, 'daito', `${project.name}`);

  renameFilesAsync(
    filePaths,
    ['_husky', '_vscode', '_editorconfig', '_gitignore', '_prettierrc'],
    project.directory
  );

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

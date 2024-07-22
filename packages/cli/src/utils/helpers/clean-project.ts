import fs from 'fs-extra';
import { Project } from '../types';

export const remove = (directory: string) =>
  fs.rmSync(directory, {
    recursive: true,
    force: true,
  });

export const removeString = (file: string, pattern: RegExp) => {
  const data = fs.readFileSync(file, 'utf-8');

  const newValue = data.replace(pattern, '');
  fs.writeFileSync(file, newValue, 'utf-8');
};

export const cleanProject = (project: Project) => {
  if (!project.apps.includes('docs')) {
    remove(`${project.directory}/apps/docs`);
  }

  if (!project.packages.includes('cli')) {
    remove(`${project.directory}/packages/cli`);
  }
};

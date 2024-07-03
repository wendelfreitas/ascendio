import fs from 'fs-extra';
import { Project } from '../types';
import { COMPONENTS } from '../constants';

export const remove = (directory: string) =>
  fs.rmSync(directory, {
    recursive: true,
    force: true,
  });

export const removeString = (file: string, pattern: RegExp) => {
  var data = fs.readFileSync(file, 'utf-8');

  var newValue = data.replace(pattern, '');
  fs.writeFileSync(file, newValue, 'utf-8');
};

export const cleanProject = (project: Project) => {
  if (!project.apps.includes('docs')) {
    remove(`${project.directory}/apps/docs`);
  }

  if (!project.packages.includes('cli')) {
    remove(`${project.directory}/packages/cli`);
  }

  for (const component of COMPONENTS) {
    if (!project.components.includes(component)) {
      const pattern = new RegExp(
        `export \\* from '\\.\\/components\\/${component}\\/${component}';`,
        'g'
      );

      remove(`${project.directory}/packages/ui/src/components/${component}`);
      removeString(`${project.directory}/packages/ui/src/index.ts`, pattern);
    }
  }
};

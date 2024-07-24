import path from 'path';
import * as fs from 'fs';
import { COMPONENTS } from '../constants';
import { Project } from '../types';

export const checkAndRemoveTestDependencies = (project: Project) => {
  for (const component of project.components) {
    if (COMPONENTS[component]?.packages.includes('resize-observer-polyfill')) {
      return;
    }
  }

  const filePath = path.join(project.directory, '/packages/ui/.jest/setup.ts');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return console.error(`Error reading file: ${err}`);
    }

    const updatedData = data
      .split('\n')
      .filter(
        (line) =>
          !line.includes(
            "import ResizeObserver from 'resize-observer-polyfill';"
          ) && !line.includes('global.ResizeObserver = ResizeObserver;')
      )
      .join('\n');

    fs.writeFile(filePath, updatedData, 'utf8', (err) => {
      if (err) {
        return console.error(`Error writing file: ${err}`);
      }
    });
  });
};

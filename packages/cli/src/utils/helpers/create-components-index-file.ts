import path from 'path';
import * as fs from 'fs';
import { Project } from '../types';

export const createComponentsIndexFile = (project: Project) => {
  const filePath = path.join(project.directory, '/packages/ui/src/index.ts');
  const content = [
    `export * from './providers/ThemeProvider/ThemeProvider';`,
    ...project.components.map(
      (component) => `export * from './components/${component}/${component}';`
    ),
  ].join('\n');

  fs.writeFileSync(filePath, content, 'utf8');
};

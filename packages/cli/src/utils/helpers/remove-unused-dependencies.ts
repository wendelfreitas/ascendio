import path from 'path';
import * as fs from 'fs';
import { COMPONENTS_DEPENDENCY } from '../constants';
import { Project } from '../types';

export const removeUnusedDependencies = async (project: Project) => {
  const packageJsonPath = path.join(
    project.directory,
    '/packages/ui/package.json'
  );

  const data = await fs.promises.readFile(packageJsonPath, 'utf8');

  const packageJson = JSON.parse(data);
  const dependencies = packageJson.dependencies || {};

  Object.keys(COMPONENTS_DEPENDENCY).forEach((component) => {
    if (!project.components.includes(component)) {
      const dependencyInfo = COMPONENTS_DEPENDENCY[component];
      if (dependencyInfo) {
        dependencyInfo.packages.forEach((pkg) => {
          if (dependencies[pkg]) {
            delete dependencies[pkg];
            console.log(`Removido ${pkg} das dependências`);
          }
        });
      }
    }
  });

  packageJson.dependencies = dependencies;

  fs.promises.writeFile(
    packageJsonPath,
    JSON.stringify(packageJson, null, 2),
    'utf8'
  );
};

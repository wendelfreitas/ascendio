import path from 'path';
import * as fs from 'fs';
import { COMPONENTS } from '../constants';
import { Project } from '../types';

const exceptions = ['react', 'lucide-react'];

export const removeUnusedDependencies = async (project: Project) => {
  const packageJsonPath = path.join(
    project.directory,
    '/packages/ui/package.json'
  );

  const data = await fs.promises.readFile(packageJsonPath, 'utf8');

  const packageJson = JSON.parse(data);
  const dependencies = packageJson.dependencies || {};

  let packages: string[] = [];

  Object.keys(COMPONENTS).forEach((component) => {
    if (project.components.includes(component)) {
      const dependencyInfo = COMPONENTS[component];
      if (dependencyInfo) {
        packages.push(...dependencyInfo.packages);
      }
    }
  });

  packages = [...new Set(packages)];

  Object.keys(dependencies)
    .filter((dependency) => !exceptions.includes(dependency))
    .filter((dependency) => !dependency.includes('/utils'))
    .forEach((pkg: string) => {
      if (!packages.includes(pkg)) {
        delete dependencies[pkg];
      }
    });

  packageJson.dependencies = dependencies;

  fs.promises.writeFile(
    packageJsonPath,
    JSON.stringify(packageJson, null, 2),
    'utf8'
  );
};

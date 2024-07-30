import { COMPONENTS } from '../constants';
import { Project } from '../types';
import { remove } from './clean-project';

export const removeUnusedComponents = (project: Project) => {
  const components = Object.keys(COMPONENTS).filter(
    (component) => !project.components.includes(component)
  );

  for (const component of components) {
    remove(`${project.directory}/packages/ui/src/components/${component}`);
  }
};

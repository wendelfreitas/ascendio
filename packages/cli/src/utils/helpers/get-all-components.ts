import { COMPONENTS } from '../constants';

function getDependencies(component: string, resolved = new Set()) {
  if (resolved.has(component)) return [];

  const dependencies = COMPONENTS[component]?.components || [];
  resolved.add(component);

  let result: string[] = [];
  for (const dep of dependencies) {
    result = result.concat(getDependencies(dep, resolved));
  }
  result.push(component);

  return result;
}

export function getAllComponents(choices: string[]) {
  const finalComponentsSet = new Set<string>();

  for (const choice of choices) {
    const dependencies = getDependencies(choice);
    dependencies.forEach((dep) => finalComponentsSet.add(dep));
  }

  return Array.from(finalComponentsSet).sort();
}

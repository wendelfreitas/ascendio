import fs from 'fs-extra';
import { Project } from '../types';
import { remove } from './clean-project';
import { STORYBOOK_DEPENDENCIES, TESTS_DEPENDENCIES } from '../constants';

const removeTests = async (project: Project, filePaths: string[]) => {
  if (!project.addons.includes('tests')) {
    const files = filePaths.filter(
      (path) => path.includes('.test.') || path.includes('jest.config')
    );

    for (const file of files) {
      fs.unlinkSync(file);
    }

    const folders = filePaths
      .filter((path) => path.includes('.jest'))
      .map((path) => path.split('/'));

    for (const folder of folders) {
      remove(folder.slice(0, -1).join('/'));
    }

    const tsfiles = filePaths.filter((file) => file.includes('tsconfig'));

    const types = ['@testing-library/jest-dom', 'jest'];

    for (const filePath of tsfiles) {
      const data = await fs.promises.readFile(filePath, 'utf8');

      // Parse the JSON content
      let jsonContent;
      try {
        jsonContent = JSON.parse(data);
      } catch (err) {
        console.error('Error parsing JSON:', err);
        return;
      }

      // Modify the "types" property
      if (jsonContent.compilerOptions && jsonContent.compilerOptions.types) {
        jsonContent.compilerOptions.types =
          jsonContent.compilerOptions.types.filter(
            (type: string) => !types.includes(type)
          );
      }

      // Convert the modified object back to JSON
      const updatedJsonContent = JSON.stringify(jsonContent, null, 2);

      // Write the updated content back to the file
      await fs.promises.writeFile(filePath, updatedJsonContent, 'utf8');
    }

    const packageFiles = filePaths.filter((file) =>
      file.includes('package.json')
    );

    for (const filePath of packageFiles) {
      const data = await fs.promises.readFile(filePath, 'utf8');

      // Parse the package.json file content
      let packageJson;
      try {
        packageJson = JSON.parse(data);
      } catch (parseErr) {
        console.error(`Error parsing JSON: ${parseErr}`);
        return;
      }

      // Remove the last two script commands from the scripts section
      if (packageJson.scripts) {
        delete packageJson.scripts.test;
        delete packageJson.scripts['test:watch'];
      }

      TESTS_DEPENDENCIES.forEach((dep) => {
        if (packageJson.dependencies && packageJson.dependencies[dep]) {
          delete packageJson.dependencies[dep];
        }
        if (packageJson.devDependencies && packageJson.devDependencies[dep]) {
          delete packageJson.devDependencies[dep];
        }
      });

      // Convert the updated package.json object back to a JSON string
      const updatedPackageJson = JSON.stringify(packageJson, null, 2);

      // Write the updated JSON back to the package.json file
      await fs.promises.writeFile(filePath, updatedPackageJson, 'utf8');
    }
  }
};

const removeStories = async (project: Project, filePaths: string[]) => {
  if (!project.addons.includes('storybook')) {
    const files = filePaths.filter((path) => path.includes('.stories.'));

    for (const file of files) {
      fs.unlinkSync(file);
    }

    const folders = filePaths
      .filter(
        (path) => path.includes('.storybook') || path.includes('/stories/')
      )
      .map((path) => path.split('/'));

    for (const folder of folders) {
      remove(folder.slice(0, -1).join('/'));
    }

    const packageFiles = filePaths.filter((file) =>
      file.includes('package.json')
    );

    for (const filePath of packageFiles) {
      const data = await fs.promises.readFile(filePath, 'utf8');

      // Parse the package.json file content
      let packageJson;
      try {
        packageJson = JSON.parse(data);
      } catch (parseErr) {
        console.error(`Error parsing JSON: ${parseErr}`);
        return;
      }

      // Remove the last two script commands from the scripts section
      if (packageJson.scripts) {
        delete packageJson.scripts.storybook;
        delete packageJson.scripts['build-storybook'];
      }

      STORYBOOK_DEPENDENCIES.forEach((dep) => {
        if (packageJson.dependencies && packageJson.dependencies[dep]) {
          delete packageJson.dependencies[dep];
        }
        if (packageJson.devDependencies && packageJson.devDependencies[dep]) {
          delete packageJson.devDependencies[dep];
        }
      });

      // Convert the updated package.json object back to a JSON string
      const updatedPackageJson = JSON.stringify(packageJson, null, 2);

      // Write the updated JSON back to the package.json file
      await fs.promises.writeFile(filePath, updatedPackageJson, 'utf8');
    }
  }
};

export const removeUnusedAddons = async (
  project: Project,
  filePaths: string[]
) => {
  await removeTests(project, filePaths);
  await removeStories(project, filePaths);
};

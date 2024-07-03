import fs from 'fs-extra';

export const checkIfExists = async ({ projectDir }: { projectDir: string }) => {
  if (fs.existsSync(projectDir) && fs.readdirSync(projectDir).length) {
    return true;
  }
};

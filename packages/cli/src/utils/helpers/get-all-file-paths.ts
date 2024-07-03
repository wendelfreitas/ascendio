import path from 'path';
import fs from 'fs-extra';

export const getAllFilePaths = (dir: string, fileList: string[] = []) => {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      getAllFilePaths(filePath, fileList);
    } else {
      fileList.push(filePath);
    }
  });

  return fileList;
};

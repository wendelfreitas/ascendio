import { replaceInFile } from 'replace-in-file';

export const replaceWordInFiles = async (
  filePaths: string[],
  fromWord: string,
  toWord: string
) => {
  const options = {
    files: filePaths,
    from: new RegExp(fromWord, 'g'),
    to: (match: string) => {
      return match.replace(fromWord, toWord);
    },
  };

  try {
    await replaceInFile(options);
  } catch (error) {
    console.error('Error occurred:', error);
  }
};

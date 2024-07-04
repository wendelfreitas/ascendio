import { exec } from 'child_process';
import semver from 'semver';
import { logger } from '../logger';

function nodeVersion() {
  return new Promise<string>((resolve, reject) => {
    exec('node -v', (error, stdout) => {
      if (error) {
        if (error.code === 127) {
          reject(logger.error('Warning: Node.is is not installed!'));
        } else {
          reject(logger.error(error.message));
        }
        process.exit(1);
      } else {
        resolve(stdout.trim());
      }
    });
  });
}

function pnpmVersion() {
  return new Promise<string>((resolve, reject) => {
    exec('pnpm --version', (error, stdout) => {
      if (error) {
        if (error.code === 127) {
          reject(logger.error('Warning: pnpm is not installed!'));
        } else {
          reject(logger.error(error.message));
        }
        process.exit(1);
      } else {
        resolve(stdout.trim());
      }
    });
  });
}

export const prerequisites = async () => {
  const isPnpm =
    process.env.npm_execpath && process.env.npm_execpath.includes('pnpm');

  if (!isPnpm) {
    logger.error(`For now, Ascendion is only avaiable using pnpm.\n`);
    process.exit(1);
  }

  const [node, pnpm] = await Promise.all([nodeVersion(), pnpmVersion()]);

  if (!semver.gt(node, '18.16.0')) {
    logger.error(
      `Error: You are using Node.js ${node}. To use Ascendio, Node.js version >= v18.17.0 is required.\n`
    );
    process.exit(1);
  }

  if (!semver.gt(pnpm, '9.2.0')) {
    logger.error(
      `Error: You are using pnpm ${pnpm}. To use Ascendio, pnpm version >= 9.3.0 is required.\n`
    );
    process.exit(1);
  }
};

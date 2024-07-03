import path from 'path';
import { fileURLToPath } from 'url';
import { version } from '../../package.json';
import chalk from 'chalk';

const FILENAME = fileURLToPath(import.meta.url);

const LETTERS = [
    chalk.red('A'),
    chalk.cyan('S'),
    chalk.yellow('C'),
    chalk.magenta('E'),
    chalk.white('N'),
    chalk.green('D'),
    chalk.red('I'),
    chalk.cyan('O'),
];

const DIST_PATH = path.dirname(FILENAME);

export const PACKAGE_ROOT = path.join(DIST_PATH, '../');

export const DEFAULT_APPLICATION_NAME = 'ascendio-awesome-project';

export const NAME = 'ascendio';

export const VERSION = version;

export const PACKAGE = `${NAME}@${VERSION}`;

export const TITLE = `Create a awesome project with Ascendio`;

export const DESCRIPTION = `Ascendio ${chalk.italic('(A-CÊN-dio)')}  \n\n${chalk.italic('Ascend')} a turborepo project in seconds.\nDesigned to simplify the initial setup of your turborepo project. \nIdeal for indie developers or people looking to create a micro SaaS.  \n\nSee docs: ${chalk.cyan('https://docs.ascendio.dev')} \n\nCreated by ${chalk.green('Wendel Freitas')} (${chalk.cyan('https://github.com/wendelfreitas')})`;

export const HELLO_ASCENDIO = LETTERS.join('');

export const COMPONENTS = [
    'Button',
    'Checkbox',
    'Input',
    'Label',
    'Skeleton',
    'Switch',
];

export const COMPONENTS_DEPENDECY = {
    Button: {
        components: [],
        packages: [],
    },
};

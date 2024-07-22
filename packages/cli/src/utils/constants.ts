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

type Components = {
  [key: string]: {
    components: string[];
    packages: string[];
  };
};

export const COMPONENTS: Components = {
  Accordion: {
    components: [],
    packages: ['@radix-ui/react-accordion'],
  },

  Alert: {
    components: [],
    packages: [],
  },

  AlertDialog: {
    components: ['Button'],
    packages: ['@radix-ui/react-alert-dialog'],
  },

  Avatar: {
    components: [],
    packages: ['@radix-ui/react-avatar'],
  },

  Badge: {
    components: [],
    packages: [],
  },

  Breadcrumb: {
    components: [],
    packages: ['@radix-ui/react-slot'],
  },

  Button: {
    components: [],
    packages: ['@radix-ui/react-slot'],
  },

  Calendar: {
    components: ['Button'],
    packages: ['react-day-picker', 'date-fns'],
  },

  Card: {
    components: [],
    packages: [],
  },

  Checkbox: {
    components: [],
    packages: ['@radix-ui/react-checkbox'],
  },

  Collapsible: {
    components: [],
    packages: ['@radix-ui/react-collapsible'],
  },

  Command: {
    components: ['Dialog'],
    packages: ['cmdk'],
  },

  ContextMenu: {
    components: ['Dialog'],
    packages: ['@radix-ui/react-context-menu'],
  },

  Dialog: {
    components: [],
    packages: ['@radix-ui/react-dialog'],
  },

  Drawer: {
    components: [],
    packages: ['vault'],
  },

  DropdownMenu: {
    components: [],
    packages: ['@radix-ui/react-dropdown-menu'],
  },

  HoverCard: {
    components: [],
    packages: ['@radix-ui/react-hover-card'],
  },

  Input: {
    components: ['Label'],
    packages: ['react-number-format'],
  },

  InputOTP: {
    components: ['Label'],
    packages: ['input-otp'],
  },

  Label: {
    components: [],
    packages: ['@radix-ui/react-label'],
  },

  Menubar: {
    components: [],
    packages: ['@radix-ui/react-menubar'],
  },

  NavigationMenu: {
    components: [],
    packages: ['@radix-ui/react-navigation-menu'],
  },

  Popover: {
    components: [],
    packages: ['@radix-ui/react-popover'],
  },

  Progress: {
    components: [],
    packages: ['@radix-ui/react-progress'],
  },

  RadioGroup: {
    components: [],
    packages: ['@radix-ui/react-radio-group'],
  },

  Select: {
    components: [],
    packages: ['@radix-ui/react-select'],
  },

  Separator: {
    components: [],
    packages: ['@radix-ui/react-separator'],
  },

  Sheet: {
    components: [],
    packages: ['@radix-ui/react-dialog'],
  },

  Skeleton: {
    components: [],
    packages: [],
  },

  Slider: {
    components: [],
    packages: ['@radix-ui/react-slider'],
  },

  Switch: {
    components: [],
    packages: ['@radix-ui/react-switch'],
  },

  Table: {
    components: [],
    packages: [],
  },

  Tabs: {
    components: [],
    packages: ['@radix-ui/react-tabs'],
  },

  Textarea: {
    components: [],
    packages: [],
  },

  Toggle: {
    components: [],
    packages: ['@radix-ui/react-toggle'],
  },

  ToggleGroup: {
    components: ['Toggle'],
    packages: ['@radix-ui/react-toggle-group'],
  },

  Tooltip: {
    components: [],
    packages: ['@radix-ui/react-tooltip'],
  },
};

export const STORYBOOK_DEPENDENCIES = [
  'storybook',
  '@chromatic-com/storybook',
  '@storybook/addon-a11y',
  '@storybook/addon-essentials',
  '@storybook/addon-interactions',
  '@storybook/addon-links',
  '@storybook/addon-onboarding',
  '@storybook/addon-styling-webpack',
  '@storybook/addon-themes',
  '@storybook/addon-webpack5-compiler-swc',
  '@storybook/blocks',
  '@storybook/react',
  '@storybook/react-webpack5',
  '@storybook/test',
  'eslint-plugin-storybook',
  'css-loader',
  'postcss-loader',
  'style-loader',
];

export const TESTS_DEPENDENCIES = [
  '@testing-library/dom',
  '@testing-library/jest-dom',
  '@testing-library/react',
  '@testing-library/user-event',
  '@types/jest',
  'jest',
  'jest-environment-jsdom',
  'resize-observer-polyfill',
];

import { StoryFn, Meta } from '@storybook/react';

import { Button, ButtonProps } from './Button';

/**
 * These stories showcase the button
 */
const meta: Meta<ButtonProps> = {
  title: 'Components/Button',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'That shows the 5 variant types',
      options: ['primary', 'secondary', 'outline', 'danger', 'link'],
      control: {
        type: 'radio',
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
  component: Button,
};

export default meta;

export const Default: StoryFn<ButtonProps> = (args) => <Button {...args} />;

Default.args = {
  variant: 'primary',
  children: 'Hello Ascendio',
};

export const FullWidth: StoryFn<ButtonProps> = (args) => (
  <div>
    <Button {...args} className="w-full" />
  </div>
);

FullWidth.args = {
  variant: 'primary',
  children: 'Full Width Button',
};

export const Disabled: StoryFn<ButtonProps> = (args) => (
  <div className="grid grid-cols-6 gap-6">
    <Button {...args} className="w-full" />
  </div>
);

Disabled.args = {
  variant: 'primary',
  children: 'Hello Ascendio',
  disabled: true,
};

export const Danger: StoryFn<ButtonProps> = (args) => (
  <div className="grid grid-cols-6 gap-6">
    <Button {...args} className="w-full" />
  </div>
);

Danger.args = {
  variant: 'danger',
  children: 'Hello Ascendio',
};

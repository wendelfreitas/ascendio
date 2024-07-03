import { StoryFn, Meta } from '@storybook/react';
import { Label } from '../Label/Label';

import { Input, InputMask } from './Input';

const meta: Meta = {
  title: 'Components/Input',
  component: Input,
};

export default meta;

export const Default: StoryFn = () => (
  <div className="grid w-full max-w-sm items-center gap-1.5">
    <Label htmlFor="email">Email</Label>
    <Input type="email" id="email" placeholder="E-mail" />
  </div>
);

export const withMask: StoryFn = () => (
  <div className="grid w-full max-w-sm items-center gap-1.5">
    <Label htmlFor="birthdate">Date of Birth</Label>
    <InputMask
      id="birthdate"
      placeholder="Date of Birth"
      format="####/##/##"
      defaultValue="1997/12/13"
    />
  </div>
);

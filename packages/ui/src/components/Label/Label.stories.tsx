import { StoryFn, Meta } from '@storybook/react';

import { Label } from './Label';

const meta: Meta = {
  title: 'Components/Label',
  component: Label,
};

export default meta;

export const Default: StoryFn = () => (
  <div className="grid w-full max-w-sm items-center gap-1.5">
    <Label htmlFor="email">Email</Label>
  </div>
);

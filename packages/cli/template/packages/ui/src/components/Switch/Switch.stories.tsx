import { StoryFn, Meta } from '@storybook/react';
import { Switch } from './Switch';
import { useState } from 'react';
import { Label } from '../Label/Label';

const meta: Meta = {
  title: 'Components/Switch',
  component: Switch,
};

export default meta;

export const Default: StoryFn = () => {
  const [active, setActive] = useState(true);

  return (
    <div className="flex items-center space-x-2">
      <Switch
        checked={active}
        onCheckedChange={setActive}
        id="super-saiyan-mode"
        aria-label="Super Saiyan mode"
      />
      <Label htmlFor="super-saiyan-mode">Super Saiyan mode</Label>
    </div>
  );
};

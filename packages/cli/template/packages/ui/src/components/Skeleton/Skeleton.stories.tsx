import { StoryFn, Meta } from '@storybook/react';

import { Skeleton } from './Skeleton';

const meta: Meta = {
  title: 'Components/Skeleton',
  component: Skeleton,
};

export default meta;

export const Default: StoryFn = () => (
  <div className="flex items-center space-x-3">
    <div>
      <Skeleton className="w-16 h-16 rounded-full" />
    </div>
    <div>
      <p className="font-semibold text-lg">Wendel Freitas</p>
      <small>Software Engineer</small>
    </div>
  </div>
);

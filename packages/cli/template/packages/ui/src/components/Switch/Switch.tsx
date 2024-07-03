import * as React from 'react';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import classNames from 'classnames';

export const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={classNames(
      'peer inline-flex h-6 w-9 shrink-0 cursor-pointer items-center rounded-full border dark:border-primary-500 shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary-500 data-[state=unchecked]:bg-gray-50',
      {
        'bg-primary-500': props.checked,
      },
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={classNames(
        'pointer-events-none bg-primary-500 block h-4 w-4 rounded-full shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0',
        {
          'bg-white': props.checked,
        }
      )}
    />
  </SwitchPrimitives.Root>
));

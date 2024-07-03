import classNames from 'classnames';

export const Skeleton = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={classNames('animate-pulse rounded-md bg-black/15', className)}
      {...props}
    />
  );
};

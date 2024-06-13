import clsx from 'clsx';

export default function Divider({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={clsx('h-[1px] w-full bg-gray-02', className)} {...props} />
  );
}

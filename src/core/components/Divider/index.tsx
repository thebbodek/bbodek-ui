import clsx from 'clsx';

export default function Divider({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={clsx('bg-gray-02 h-[1px] w-full', className)} {...props} />
  );
}

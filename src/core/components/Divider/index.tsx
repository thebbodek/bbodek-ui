import clsx from 'clsx';

const Divider = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={clsx('bg-gray-02 h-[1px] w-full', className)} {...props} />
  );
};

export default Divider;

import clsx from "clsx";

export default function Divider({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className = {clsx("w-full h-[1px] bg-gray-02", className)} {...props} />
  );
}

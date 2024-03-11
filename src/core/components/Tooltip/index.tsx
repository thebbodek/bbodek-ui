import { PropsWithChildren, useId } from "react";
import { PlacesType, Tooltip as ReactToolTip } from "react-tooltip";

interface TooltipProps {
  tooltipContentText: string;
  placement?: PlacesType;
  className?: string;
}
export default function Tooltip({
  tooltipContentText,
  placement = "top",
  className = "!bg-primary-03 !rounded-lg",
  children,
}: PropsWithChildren<TooltipProps>) {
  const id = useId();

  return (
    <>
      <a data-tooltip-id = {id} data-tooltip-content = {tooltipContentText}>
        {children}
      </a>
      <ReactToolTip
        id = {id}
        place = {placement}
        className = {className}
      />
    </>
  );
}

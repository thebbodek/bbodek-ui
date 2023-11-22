import { JSX, PropsWithChildren, useId } from "react";
import { PlacesType, Tooltip as ReactToolTip } from "react-tooltip";

interface TooltipProps {
    tooltipContentText: string;
    placement?: PlacesType;
}
export default function Tooltip({
    tooltipContentText,
    placement = "top",
    children,
  }: PropsWithChildren<TooltipProps>): JSX.Element {
  const id = useId();
  return(
    <>
      <a
        data-tooltip-id = {id}
        data-tooltip-content = {tooltipContentText}
      >
        {children}
      </a>
      <ReactToolTip
        id = {id}
        place = {placement}
        className = "!text-gray-07 !bg-primary-01 !rounded-lg"
      />
    </>
  );
}

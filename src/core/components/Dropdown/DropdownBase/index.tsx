import useClickOutside from "@/hooks/useClickOutSide";
import clsx from "clsx";
import { createContext, useState } from "react";

import DropdownItem from "./DropdownItem";
import DropdownItems from "./DropdownItems";
import DropdownTrigger from "./DropdownTrigger";
import { DropdownContextValue, DropdownProps, ReturnType } from "./types";

export const DropdownContext = createContext<DropdownContextValue | undefined>(undefined);
DropdownContext.displayName = "DropdownContext";

const DropdownBase = ({ className, trigger, content }: DropdownProps) => {
  const [ isToggle, setIsToggle ] = useState(false);
  const { contentRef } = useClickOutside<HTMLDivElement>(() => setIsToggle(false));

  return (
    <DropdownContext.Provider value = {{ isToggle, setIsToggle }}>
      <div ref = {contentRef} className = {clsx(className, "relative")}>
        {trigger}
        {isToggle && content}
      </div>
    </DropdownContext.Provider>
  );
};

export default DropdownBase as unknown as ReturnType;

DropdownBase.displayName = "DropdownBase";
DropdownBase.Trigger = DropdownTrigger;
DropdownBase.Items = DropdownItems;
DropdownBase.Item = DropdownItem;

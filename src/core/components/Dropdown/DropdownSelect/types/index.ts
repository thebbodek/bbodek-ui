import { TypographyProps } from "@/core/components/Typography/types";
import { DropdownItemProps, DropdownProps, DropdownTriggerProps } from "../../DropdownBase/types";
import DropdownSelectItem from "../DropdownSelectItem";
import DropdownSelectItems from "../DropdownSelectItems";
import DropdownSelectTrigger from "../DropdownSelectTrigger";

export interface DropdownSelectTriggerProps extends Omit<DropdownTriggerProps, "children"> {
  currentValue: TypographyProps["text"]
}

export interface DropdownSelectItemProps extends DropdownItemProps {
  checked: boolean
}

type DropdownSelect = (props: DropdownProps) => React.ReactElement;

export type ReturnType = DropdownSelect & {
  displayName: string;
  Trigger: typeof DropdownSelectTrigger;
  Items: typeof DropdownSelectItems;
  Item: typeof DropdownSelectItem;
};

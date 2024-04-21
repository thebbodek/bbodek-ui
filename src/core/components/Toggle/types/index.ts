import { FormLabelProps } from "../../FormLabel/types";
import { SIZE } from "../constants";

export interface ToggleProps
  extends Pick<
    React.InputHTMLAttributes<HTMLInputElement>,
    "onChange" | "className" | "checked" | "disabled"
  >, Omit<FormLabelProps, "label" | "labelSubText"> {
  size: SizeType;
  label: string;
  reverse?: boolean;
}

export type SizeType = typeof SIZE[keyof typeof SIZE];

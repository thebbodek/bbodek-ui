import { FormLabelProps } from "../../FormLabel/types";

export interface ToggleProps
  extends Pick<
    React.InputHTMLAttributes<HTMLInputElement>,
    "onChange" | "className" | "checked" | "disabled"
  >, Omit<FormLabelProps, "label" | "labelSubText"> {
  label: string;
  reverse?: boolean;
}

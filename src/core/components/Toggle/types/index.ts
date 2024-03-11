export interface ToggleProps
  extends Pick<
    React.InputHTMLAttributes<HTMLInputElement>,
    "onChange" | "className" | "checked" | "disabled"
  > {
  label: string;
  reverse?: boolean;
}

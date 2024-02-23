export interface ToggleButtonProps
  extends Pick<
    React.InputHTMLAttributes<HTMLInputElement>,
    "onChange" | "className" | "checked"
  > {
  label: string;
  reverse?: boolean;
}

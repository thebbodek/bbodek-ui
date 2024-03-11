export interface ToggleProps
  extends Pick<
    React.InputHTMLAttributes<HTMLInputElement>,
    "onChange" | "className" | "checked"
  > {
  label: string;
  reverse?: boolean;
}

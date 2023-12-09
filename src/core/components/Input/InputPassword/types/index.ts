import { InputBaseProps } from "../../InputBase/types";
import { UseInputProps } from "../../hooks/useInput";

export interface InputPasswordProps
    extends React.InputHTMLAttributes<HTMLInputElement>,
            Pick<InputBaseProps<"div">, "rootClassName" | "error">,
            Pick<UseInputProps, "regCallback"> {}

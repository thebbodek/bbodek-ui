import { InputBaseProps } from "../../InputBase/types";
import { UseInputProps } from "../../hooks/useInput";

export interface InputSearchProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "readOnly" | "disabled">,
            Pick<InputBaseProps<"div">, "feedback" | "rootClassName" | "error" | "readOnly" | "disabled">,
            Pick<UseInputProps, "regCallback"> {
            formSubmitHandler?: (e: React.FormEvent<HTMLFormElement>) => void;
           }

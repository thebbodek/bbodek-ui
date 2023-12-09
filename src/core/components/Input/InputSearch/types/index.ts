import { InputBaseProps } from "../../InputBase/types";
import { UseInputProps } from "../../hooks/useInput";

export interface InputSearchProps
    extends React.InputHTMLAttributes<HTMLInputElement>,
            Pick<InputBaseProps<"div">, "rootClassName" | "error">,
            Pick<UseInputProps, "regCallback"> {
            formSubmitHandler?: (e: React.FormEvent<HTMLFormElement>) => void;
           }

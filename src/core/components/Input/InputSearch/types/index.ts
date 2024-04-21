import { InputBaseProps } from "../../InputBase/types";
import { UseInputProps } from "../../hooks/useInput";
import { ROUNDED } from "../constants";

export interface InputSearchProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "readOnly" | "disabled">,
            Pick<InputBaseProps<"div">, "feedback" | "rootClassName" | "error" | "readOnly" | "disabled">,
            Pick<UseInputProps, "regCallback"> {
                rounded: RoundedType;
                formSubmitHandler?: (e: React.FormEvent<HTMLFormElement>) => void;
           }

export type RoundedType = typeof ROUNDED[keyof typeof ROUNDED];

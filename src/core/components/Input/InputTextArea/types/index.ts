import { InputBaseProps } from "../../InputBase/types";
import { UseInputProps } from "../../hooks/useInput";
import { SIZE } from "../constants";

export type TextAreaSizeType = typeof SIZE[keyof typeof SIZE];

export interface InputTextAreaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
           Pick<InputBaseProps<"div">, "rootClassName" | "label" | "labelColor" | "borderColor"| "error">,
           Pick<UseInputProps, "regCallback"> {
            textAreaHeight: TextAreaSizeType;
            maxLength: React.TextareaHTMLAttributes<HTMLTextAreaElement>["maxLength"];
           }

import { TypographyProps } from "@/core/components/Typography/types";
import { InputHTMLAttributes } from "react";

export interface SelectButtonItemProps extends InputHTMLAttributes<HTMLInputElement> {
  label: TypographyProps<"span">["text"]
}

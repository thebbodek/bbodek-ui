import { InputHTMLAttributes } from "react";

import { TypographyProps } from "@/core/components/Typography";

export interface SelectButtonItemProps extends InputHTMLAttributes<HTMLInputElement> {
  label: TypographyProps<"span">["text"]
}

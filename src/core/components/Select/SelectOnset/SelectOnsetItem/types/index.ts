import { InputHTMLAttributes } from "react";

import { OnsetType } from "../../SelectOnset/types";

export interface OnsetItemProps extends InputHTMLAttributes<HTMLInputElement>{
  onset: OnsetType
}

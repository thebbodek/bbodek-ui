import { IconStyle, PhosphorIcon } from '@phosphor-icons/core';

export interface IconComponentProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  iconKey: PhosphorIcon['name'];
  weight?: `${IconStyle}`;
}

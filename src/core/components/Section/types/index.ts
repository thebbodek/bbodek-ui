import { ROUNDED } from '../constants';

export interface SectionProps<T extends React.ElementType>
  extends React.HTMLAttributes<HTMLElement> {
  rounded?: RoundedType;
  hasRounded?: boolean;
  hasBorder?: boolean;
  hasShadow?: boolean;
  element?: T;
}

export type RoundedType = (typeof ROUNDED)[keyof typeof ROUNDED];

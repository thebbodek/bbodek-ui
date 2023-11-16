export interface SectionProps<T extends React.ElementType> extends React.HTMLAttributes<HTMLElement> {
  hasRounded?: boolean;
  hasBorder?: boolean;
  hasShadow?: boolean;
  element?: T;
}

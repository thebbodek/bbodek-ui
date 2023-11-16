export interface SectionProps<T extends React.ElementType> extends React.HTMLAttributes<HTMLElement> {
  hasBorder?: boolean;
  hasShadow?: boolean;
  element?: T;
}

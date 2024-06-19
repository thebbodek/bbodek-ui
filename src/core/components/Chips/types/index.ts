import { HTMLAttributes, RefObject } from 'react';

export interface ChipsParams
  extends Pick<HTMLAttributes<HTMLUListElement>, 'className'> {
  rootRef: RefObject<HTMLUListElement>;
  items: string[];
  onDelete?: (item: string) => void;
}

import { HTMLAttributes, RefObject } from 'react';

export interface ChipsParams
  extends Pick<HTMLAttributes<HTMLUListElement>, 'className'> {
  rootRef: RefObject<HTMLUListElement>;
  items: { id: string; label: string }[];
  onDelete?: (item: { id: string }) => void;
}

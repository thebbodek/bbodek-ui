import {
  Dispatch,
  HTMLAttributes,
  MouseEvent,
  ReactElement,
  ReactNode,
  SetStateAction,
} from 'react';

import { ThemeColors } from '@/types';
import DropdownItem from '../DropdownItem';
import DropdownItems from '../DropdownItems';
import DropdownTrigger from '../DropdownTrigger';
import { FormLabelProps } from '@/core/components/FormLabel/types';

export interface DropdownProps extends Partial<FormLabelProps> {
  className?: string;
  disabled?: boolean;
  readOnly?: boolean;
  trigger: ReactNode;
  content: ReactNode;
  feedback?: ReactNode;
  feedbackColor?: ThemeColors;
}

export interface DropdownContextValue
  extends Pick<DropdownProps, 'readOnly' | 'disabled'> {
  isToggle: boolean;
  setIsToggle: Dispatch<SetStateAction<boolean>>;
}

export interface DropdownItemProps extends HTMLAttributes<HTMLLIElement> {}

export interface DropdownItemsProps extends HTMLAttributes<HTMLUListElement> {
  items: ReactNode[];
}

export interface DropdownTriggerProps
  extends Omit<HTMLAttributes<HTMLButtonElement>, 'children'> {
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  children:
    | ReactNode
    | ((
        props: Pick<DropdownContextValue, 'isToggle' | 'readOnly' | 'disabled'>,
      ) => ReactNode);
}

type Dropdown = (props: DropdownProps) => ReactElement;

export type ReturnType = Dropdown & {
  displayName: string;
  Trigger: typeof DropdownTrigger;
  Items: typeof DropdownItems;
  Item: typeof DropdownItem;
};

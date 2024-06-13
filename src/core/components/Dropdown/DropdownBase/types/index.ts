import { ThemeColors } from '@/types';
import { Dispatch, HTMLAttributes, SetStateAction } from 'react';
import DropdownItem from '../DropdownItem';
import DropdownItems from '../DropdownItems';
import DropdownTrigger from '../DropdownTrigger';

export interface DropdownProps {
  className?: string;
  disabled?: boolean;
  readOnly?: boolean;
  trigger: React.ReactNode;
  content: React.ReactNode;
  feedback?: React.ReactNode;
  feedbackColor?: ThemeColors;
}

export interface DropdownContextValue
  extends Pick<DropdownProps, 'readOnly' | 'disabled'> {
  isToggle: boolean;
  setIsToggle: Dispatch<SetStateAction<boolean>>;
}

export interface DropdownItemProps extends HTMLAttributes<HTMLLIElement> {}

export interface DropdownItemsProps extends HTMLAttributes<HTMLUListElement> {
  items: React.ReactNode[];
}

export interface DropdownTriggerProps
  extends Omit<HTMLAttributes<HTMLButtonElement>, 'children'> {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children:
    | React.ReactNode
    | ((
        props: Pick<DropdownContextValue, 'isToggle' | 'readOnly' | 'disabled'>,
      ) => React.ReactNode);
}

type Dropdown = (props: DropdownProps) => React.ReactElement;

export type ReturnType = Dropdown & {
  displayName: string;
  Trigger: typeof DropdownTrigger;
  Items: typeof DropdownItems;
  Item: typeof DropdownItem;
};

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
import { InputSearchProps } from '@/core/components/Input/InputSearch/types';
import { ModalBaseProps } from '@/core/components/Modal/ModalBase/types';
import { MenuProps } from '@/core/components/Menu/types';
import { VirtualListProps } from '@/core/components/Virtual/VirtualList/types';
import { PopoverProps } from '@/core/components/Popover/PopoverBase/types';

export interface DropdownProps
  extends Partial<FormLabelProps>,
    Pick<ModalBaseProps, 'useClickOutsideEvent'>,
    Pick<PopoverProps, 'applyMaxWidth'> {
  className?: string;
  disabled?: boolean;
  readOnly?: boolean;
  trigger: ReactElement;
  content: ReactElement;
  feedback?: ReactNode;
  feedbackColor?: ThemeColors;
  badge?: ReactNode;
  sub?: ReactNode;
}

export interface DropdownContextValue
  extends Pick<DropdownProps, 'readOnly' | 'disabled'> {
  isToggle: boolean;
  setIsToggle: Dispatch<SetStateAction<boolean>>;
}

export interface DropdownItemProps
  extends HTMLAttributes<HTMLDivElement>,
    Pick<MenuProps, 'useCloseOnItemClick'> {
  checked: boolean;
  useCloseOnItemClick?: boolean;
  disabled?: boolean;
}

export interface DropdownItemsProps
  extends Pick<HTMLAttributes<HTMLUListElement>, 'className'>,
    Partial<Pick<VirtualListProps, 'itemHeight' | 'gap'>> {
  rootClassName?: string;
  items: ReactNode[];
  useSearch?: boolean;
  inputProps?: Omit<InputSearchProps<'div'>, 'rootElement' | 'rounded'> &
    Partial<Pick<InputSearchProps<'div'>, 'rounded'>>;
}

export interface DropdownTriggerProps
  extends Omit<HTMLAttributes<HTMLButtonElement>, 'children'> {
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  error?: boolean;
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

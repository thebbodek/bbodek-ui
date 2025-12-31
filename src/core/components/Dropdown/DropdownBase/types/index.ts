import {
  Dispatch,
  HTMLAttributes,
  MouseEvent,
  ReactElement,
  ReactNode,
  RefObject,
  SetStateAction,
} from 'react';

import {
  DROPDOWN_ITEM_STATE,
  KEYBOARD_DOWN_KEY,
} from '@/core/components/Dropdown/DropdownBase/constants';
import DropdownItem from '@/core/components/Dropdown/DropdownBase/DropdownItem';
import DropdownItems from '@/core/components/Dropdown/DropdownBase/DropdownItems';
import DropdownTrigger from '@/core/components/Dropdown/DropdownBase/DropdownTrigger';
import { FormLabelProps } from '@/core/components/FormLabel/types';
import { InputSearchProps } from '@/core/components/Input/InputSearch/types';
import { MenuItemColorTheme, MenuProps } from '@/core/components/Menu/types';
import { ModalBaseProps } from '@/core/components/Modal/ModalBase/types';
import { PopoverProps } from '@/core/components/Popover/PopoverBase/types';
import { TypographyProps } from '@/core/components/Typography/types';
import { VirtualListProps } from '@/core/components/Virtual/VirtualList/types';
import { ThemeColors } from '@/types';

export interface DropdownProps
  extends
    Partial<FormLabelProps>,
    Pick<ModalBaseProps, 'useClickOutsideEvent' | 'onClose'>,
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

export interface DropdownContextValue extends Pick<
  DropdownProps,
  'readOnly' | 'disabled'
> {
  isToggle: boolean;
  setIsToggle: Dispatch<SetStateAction<boolean>>;
  listboxRef: RefObject<HTMLDivElement | null>;
}

export interface DropdownItemProps
  extends
    HTMLAttributes<HTMLDivElement>,
    Pick<MenuProps, 'useCloseOnItemClick'> {
  isFocus?: boolean;
  checked: boolean;
  useCloseOnItemClick?: boolean;
  disabled?: boolean;
  colorTheme?: MenuItemColorTheme;
}

export interface DropdownItemsProps
  extends
    Pick<HTMLAttributes<HTMLUListElement>, 'className'>,
    Partial<Pick<VirtualListProps, 'itemHeight' | 'gap'>> {
  rootClassName?: string;
  items: ReactElement[];
  useSearch?: boolean;
  inputProps?: Omit<InputSearchProps<'div'>, 'rootElement' | 'rounded'> &
    Partial<Pick<InputSearchProps<'div'>, 'rounded'>>;
}

export interface DropdownTriggerProps extends Omit<
  HTMLAttributes<HTMLButtonElement>,
  'children'
> {
  placeholder?: TypographyProps['text'];
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

export type DropdownItemStateValue =
  (typeof DROPDOWN_ITEM_STATE)[keyof typeof DROPDOWN_ITEM_STATE];

export type KeyboardDownType =
  (typeof KEYBOARD_DOWN_KEY)[keyof typeof KEYBOARD_DOWN_KEY];

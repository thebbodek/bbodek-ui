import { ElementType, HTMLAttributes, ReactElement } from 'react';

import { ButtonProps } from '@/core/components/Button/Button/types';
import { LightColorThemeType } from '@/types';
import { PopoverProps } from '@/core/components/Popover/PopoverBase/types';
import MenuPopoverItem from '@/core/components/Menu/MenuItem';

export interface MenuProps
  extends Omit<PopoverProps, 'popover'>,
    Pick<HTMLAttributes<HTMLUListElement>, 'className'> {
  items: Required<PopoverProps>['popover'][];
  useCloseOnItemClick?: boolean;
}

export type MenuItemColorTheme = Extract<
  LightColorThemeType,
  'error' | 'secondary'
>;

export interface MenuItemProps<T extends ElementType>
  extends Pick<
    ButtonProps,
    'content' | 'leftIcon' | 'rightIcon' | 'disabled' | 'gap'
  > {
  element?: T;
  colorTheme?: MenuItemColorTheme;
}

type Menu = (props: MenuProps) => ReactElement;

export type MenuReturnType = Menu & {
  displayName: string;
  Item: typeof MenuPopoverItem;
};

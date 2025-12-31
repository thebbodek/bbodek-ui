import clsx from 'clsx';
import {
  forwardRef,
  MouseEvent,
  PropsWithChildren,
  Ref,
  useContext,
} from 'react';

import { DropdownContext } from './index';
import { DropdownContextValue, DropdownItemProps } from './types';
import { LIGHT_COLOR_THEME } from '@/constants/theme';
import {
  DROPDOWN_ITEM_STATE,
  DROPDOWN_ITEM_STYLES,
} from '@/core/components/Dropdown/DropdownBase/constants';
import { MENU_ITEM_THEME } from '@/core/components/Menu/constants';

const DropdownItem = forwardRef(
  (
    {
      children,
      isFocus = false,
      onClick,
      className,
      checked,
      disabled = false,
      useCloseOnItemClick = true,
      colorTheme = LIGHT_COLOR_THEME['SECONDARY'],
      ...props
    }: PropsWithChildren<DropdownItemProps>,
    ref: Ref<HTMLDivElement>,
  ) => {
    const { setIsToggle } = useContext(DropdownContext) as DropdownContextValue;

    const onClickHandler = (e: MouseEvent<HTMLDivElement>) => {
      if (disabled) return;

      useCloseOnItemClick && setIsToggle(false);
      onClick?.(e);
    };

    const getItemState = () => {
      if (disabled && isFocus) return DROPDOWN_ITEM_STATE.DISABLED_FOCUS;

      if (disabled) return DROPDOWN_ITEM_STATE.DISABLED;

      if (isFocus) return DROPDOWN_ITEM_STATE.FOCUS;

      if (checked) return DROPDOWN_ITEM_STATE.CHECKED;

      return DROPDOWN_ITEM_STATE.DEFAULT;
    };

    return (
      <div
        ref={ref}
        role='option'
        onClick={onClickHandler}
        className={clsx(
          `w-full rounded-md p-2 ${!disabled && MENU_ITEM_THEME[colorTheme]}`,
          DROPDOWN_ITEM_STYLES[getItemState()],
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

export default DropdownItem;

DropdownItem.displayName = 'DropdownItem';

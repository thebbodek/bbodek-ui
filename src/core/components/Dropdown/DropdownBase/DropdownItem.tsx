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
import { MENU_ITEM_THEME } from '@/core/components/Menu/constants';

const DropdownItem = forwardRef(
  (
    {
      children,
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

    return (
      <div
        ref={ref}
        role='option'
        onClick={onClickHandler}
        className={clsx(
          'w-full rounded-md p-2',
          !disabled
            ? checked
              ? 'text-primary-03 font-medium'
              : 'text-gray-07'
            : 'text-gray-03',
          disabled
            ? 'cursor-not-allowed'
            : `cursor-pointer ${MENU_ITEM_THEME[colorTheme]}`,
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

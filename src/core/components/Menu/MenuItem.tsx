import clsx from 'clsx';
import { ComponentPropsWithoutRef, ElementType, MouseEvent } from 'react';

import { MENU_ITEM_THEME } from './constants';
import { MenuItemProps } from './types';
import { LIGHT_COLOR_THEME } from '@/constants/theme';
import { BUTTON_GAP, GAP } from '@/core/components/Button/ButtonBase/constants';

const MenuItem = <T extends ElementType = 'button'>({
  element: Element,
  content,
  leftIcon,
  rightIcon,
  className,
  disabled,
  onClick,
  gap = GAP['GAP_6'],
  colorTheme = LIGHT_COLOR_THEME['SECONDARY'],
  ...props
}: MenuItemProps<T> & ComponentPropsWithoutRef<T>) => {
  const Component: ElementType = Element || 'button';
  const defaultProps =
    Component === 'button' ? { disabled, type: 'button' } : {};

  const handleClick = (e: MouseEvent<T>) => {
    e.stopPropagation();

    if (disabled) {
      e.preventDefault();
    } else {
      onClick?.(e);
    }
  };

  return (
    <li
      className={clsx(
        'text-body-02-medium min-w-fit',
        !disabled && `rounded-md transition-all ${MENU_ITEM_THEME[colorTheme]}`,
      )}
    >
      <Component
        className={clsx(
          'flex w-full items-center p-2 text-start',
          disabled && 'text-gray-04 cursor-not-allowed',
          (leftIcon || rightIcon) && gap && BUTTON_GAP[gap],
          className,
        )}
        onClick={handleClick}
        {...defaultProps}
        {...props}
      >
        {leftIcon && leftIcon}
        {content}
        {rightIcon && rightIcon}
      </Component>
    </li>
  );
};

export default MenuItem;

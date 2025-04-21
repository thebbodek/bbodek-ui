import clsx from 'clsx';
import { PropsWithChildren, forwardRef } from 'react';

import { COLOR_THEME_STYLES } from '@/constants/theme';
import { THEME_TYPOGRAPHY } from '@/constants/typography';
import {
  BUTTON_GAP,
  BUTTON_ROUNDED,
  BUTTON_SIZE,
  GAP,
  ROUNDED,
  SIZE,
} from './constants';
import { ButtonBaseProps, SizeType } from './types';

const ButtonBase = forwardRef(
  (
    {
      colorTheme,
      color,
      backgroundColor,
      size,
      gap = GAP['GAP_12'],
      rounded = ROUNDED['ROUNDED_12'],
      hasIcon = false,
      borderColor,
      disabled,
      children,
      ...props
    }: PropsWithChildren<ButtonBaseProps>,
    ref: React.Ref<HTMLButtonElement>,
  ) => {
    const { className, theme, ...rest } = props;
    const MINI_SIZES: SizeType[] = [SIZE['SIZE_24'], SIZE['SIZE_20']];
    const isMiniSize = MINI_SIZES.includes(size);
    const defaultButtonTheme = !isMiniSize
      ? THEME_TYPOGRAPHY['BODY_01_BOLD']
      : THEME_TYPOGRAPHY['BODY_03_BOLD'];

    return (
      <button
        ref={ref}
        type={'button'}
        className={clsx(
          'disabled:border-gray-03 disabled:bg-gray-03 flex items-center justify-center disabled:cursor-not-allowed disabled:text-white',
          `text-${theme ?? defaultButtonTheme}`,
          !colorTheme && color && `text-${color}`,
          !colorTheme && backgroundColor && `bg-${backgroundColor}`,
          colorTheme && COLOR_THEME_STYLES[colorTheme],
          BUTTON_SIZE[size],
          hasIcon && gap && BUTTON_GAP[gap],
          BUTTON_ROUNDED[rounded],
          borderColor && `border border-${borderColor}`,
          className,
        )}
        disabled={disabled}
        {...rest}
      >
        {children}
      </button>
    );
  },
);

export default ButtonBase;

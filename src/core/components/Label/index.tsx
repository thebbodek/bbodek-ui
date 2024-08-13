import clsx from 'clsx';
import React, { ElementType, forwardRef } from 'react';

import { COLOR_THEME, COLOR_THEME_STYLES } from '@/constants/theme';
import { BUTTON_ROUNDED } from '@/core/components/Button/ButtonBase/constants';
import { LABEL_ROUNDED, LABEL_SIZE, SIZE } from './constants';
import { LabelProps } from './types';

const Label = forwardRef(
  <T extends ElementType = 'div'>(
    {
      label,
      icon,
      element: Element,
      colorTheme = COLOR_THEME['WHITE'],
      size = SIZE['MEDIUM'],
      rounded,
      ...props
    }: LabelProps<T>,
    ref: React.ComponentPropsWithRef<T>['ref'],
  ) => {
    const { className, ...rest } = props;
    const Component: ElementType = Element || 'div';

    return (
      <Component
        ref={ref}
        className={clsx(
          'flex items-center justify-center gap-1',
          COLOR_THEME_STYLES[colorTheme],
          size && LABEL_SIZE[size],
          rounded ? BUTTON_ROUNDED[rounded] : LABEL_ROUNDED[size],
          className,
        )}
        {...rest}
      >
        {icon && icon}
        {label}
      </Component>
    );
  },
);

export default Label;

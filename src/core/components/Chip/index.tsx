import React, { ElementType, forwardRef, MouseEvent } from 'react';
import clsx from 'clsx';

import Label from '@/core/components/Label';
import { ChipProps } from '@/core/components/Chip/types';
import IconButton from '@/core/components/Button/IconButton';
import { ROUNDED } from '@/core/components/Button/ButtonBase/constants';
import {
  CHIP_DELETE_BUTTON_STYLE,
  CHIP_LABEL_STYLE,
} from '@/core/components/Chip/constants';
import { COLOR_THEME } from '@/constants/theme';
import Icon from '@/core/components/Icon';

const Chip = forwardRef(
  <T extends ElementType = 'div'>(
    {
      label,
      onDelete,
      colorTheme = COLOR_THEME['SECONDARY'],
      onClick,
      color,
      theme,
      rounded = ROUNDED['ROUNDED_FULL'],
      className,
      ...props
    }: ChipProps<T>,
    ref: React.ComponentPropsWithRef<T>['ref'],
  ) => {
    const handleDelete = (e: MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      onDelete?.(e);
    };

    const handleLabelClick = (e: MouseEvent<T>) => {
      e.stopPropagation();
      onClick?.(e);
    };

    const renderer = () => {
      if (!onDelete) return label;

      return (
        <>
          {label}
          <IconButton
            size={'h-20'}
            rounded={rounded}
            color={color}
            theme={theme}
            colorTheme={colorTheme}
            className={clsx(
              'brightness-100 transition-all',
              CHIP_DELETE_BUTTON_STYLE[colorTheme],
            )}
            icon={<Icon iconKey={'x'} weight={'bold'} />}
            onClick={handleDelete}
          />
        </>
      );
    };

    return (
      <Label
        ref={ref}
        label={renderer()}
        rounded={rounded}
        color={color}
        theme={theme}
        colorTheme={colorTheme}
        className={clsx(
          onDelete && 'flex gap-2',
          onClick &&
            `brightness-100 transition-all hover:brightness-95 ${CHIP_LABEL_STYLE[colorTheme]}`,
          onClick ? 'cursor-pointer' : 'cursor-text',
          className,
        )}
        onClick={handleLabelClick}
        {...props}
      />
    );
  },
);

export default Chip;

import clsx from 'clsx';
import React, { ElementType, forwardRef, MouseEvent } from 'react';

import { ROUNDED } from '@/core/components/Button/ButtonBase/constants';
import IconButton from '@/core/components/Button/IconButton';
import {
  CHIP_DELETE_BUTTON_STYLE,
  CHIP_LABEL_STYLE,
} from '@/core/components/Chip/constants';
import { ChipProps } from '@/core/components/Chip/types';
import Icon from '@/core/components/Icon';
import Label from '@/core/components/Label';

const Chip = forwardRef(
  <T extends ElementType = 'div'>(
    {
      label,
      onDelete,
      colorTheme,
      onClick,
      color,
      theme,
      backgroundColor,
      borderColor,
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
            backgroundColor={backgroundColor}
            borderColor={borderColor}
            colorTheme={colorTheme}
            className={clsx(
              'brightness-100 transition-all',
              colorTheme && CHIP_DELETE_BUTTON_STYLE[colorTheme],
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
        backgroundColor={backgroundColor}
        borderColor={borderColor}
        colorTheme={colorTheme}
        className={clsx(
          onDelete && 'flex gap-2',
          onClick &&
            !colorTheme &&
            `brightness-100 transition-all hover:brightness-95`,
          colorTheme && CHIP_LABEL_STYLE[colorTheme],
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

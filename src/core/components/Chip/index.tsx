import {
  ComponentPropsWithoutRef,
  ElementType,
  forwardRef,
  MouseEvent,
  Ref,
} from 'react';
import clsx from 'clsx';
import { X } from '@phosphor-icons/react';

import Label from '@/core/components/Label';
import { ChipProps } from '@/core/components/Chip/types';
import IconButton from '@/core/components/Button/IconButton';
import { ROUNDED } from '@/core/components/Button/ButtonBase/constants';
import {
  CHIP_DELETE_BUTTON_STYLE,
  CHIP_LABEL_STYLE,
} from '@/core/components/Chip/constants';
import { COLOR_THEME } from '@/constants/theme';

const Chip = forwardRef(
  <T extends ElementType = 'div'>(
    {
      label,
      onDelete,
      colorTheme = COLOR_THEME['SECONDARY'],
      onClick,
      rounded = ROUNDED['ROUNDED_FULL'],
      className,
      ...props
    }: ChipProps<T> & ComponentPropsWithoutRef<T>,
    ref: Ref<T>, // 여기에 적절한 타입을 지정합니다
  ) => {
    const handleDelete = (e: MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      onDelete?.();
    };

    const renderer = () => {
      if (!onDelete) return label;

      return (
        <>
          {label}
          <IconButton
            size={'h-20'}
            rounded={rounded}
            colorTheme={colorTheme}
            className={clsx(
              'brightness-100 transition-all',
              CHIP_DELETE_BUTTON_STYLE[colorTheme],
            )}
            icon={<X weight={'bold'} />}
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
        colorTheme={colorTheme}
        className={clsx(
          onDelete && 'flex gap-2',
          onClick &&
            `cursor-pointer brightness-100 transition-all hover:brightness-95 ${CHIP_LABEL_STYLE[colorTheme]}`,
          className,
        )}
        onClick={onClick}
        {...props}
      />
    );
  },
);

export default Chip;

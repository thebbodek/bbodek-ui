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

const Chip = forwardRef(
  <T extends ElementType = 'div'>(
    {
      label,
      onDelete,
      colorTheme,
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
            className={'!bg-opacity-0 transition-colors hover:!bg-opacity-100'}
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
          onClick && 'cursor-pointer transition-colors hover:bg-opacity-50',
          className,
        )}
        onClick={onClick}
        {...props}
      />
    );
  },
);

export default Chip;

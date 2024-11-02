import clsx from 'clsx';
import React, { forwardRef, MouseEvent, useId } from 'react';

import { GAP } from '@/core/components/Button/ButtonBase/constants';
import Typography from '../Typography';
import { CHECK_BOX_GAP, CHECKBOX_SVG_SIZE, SVG_SIZE } from './constants';
import { CheckboxProps } from './types';
import { THEME_COLOR } from '@/constants/color';
import { ThemeColors } from '@/types';
import Icon from '@/core/components/Icon';

const Checkbox = forwardRef(
  (
    {
      label,
      theme,
      svgSize = SVG_SIZE['SIZE_24'],
      gap = GAP['GAP_10'],
      isCircle = false,
      className,
      disabled,
      ...props
    }: CheckboxProps,
    ref: React.ComponentPropsWithRef<'input'>['ref'],
  ) => {
    const id = useId();

    return (
      <label
        onClick={(e: MouseEvent<HTMLLabelElement>) => e.stopPropagation()}
        htmlFor={id}
        className={clsx(
          {
            'flex items-center': label,
            'cursor-not-allowed': disabled,
            'cursor-pointer': !disabled,
          },
          label && gap && CHECK_BOX_GAP[gap],
          className,
        )}
      >
        <input
          ref={ref}
          id={id}
          type='checkbox'
          className='peer hidden'
          disabled={disabled}
          {...props}
        />
        <Icon
          className={clsx(
            CHECKBOX_SVG_SIZE[svgSize],
            'text-gray-05 peer-checked:text-primary-03',
          )}
          iconKey={!isCircle ? 'check-square' : 'check-circle'}
          weight='fill'
        />
        {label && (
          <Typography
            theme={theme}
            color={
              (!disabled
                ? THEME_COLOR['GRAY_08']
                : THEME_COLOR['GRAY_06']) as ThemeColors
            }
            text={label}
          />
        )}
      </label>
    );
  },
);

export default Checkbox;

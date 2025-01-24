import clsx from 'clsx';
import React, { forwardRef, MouseEvent, useId } from 'react';

import {
  CHECK_BOX_GAP,
  CHECKBOX_CIRCLE_ICON_KEY,
  CHECKBOX_COLOR_THEME,
  CHECKBOX_ICON_KEY,
  CHECKBOX_SVG_SIZE,
  CHECKBOX_TYPE,
  SVG_SIZE,
} from './constants';
import { GAP } from '@/core/components/Button/ButtonBase/constants';
import { THEME_COLOR } from '@/constants/color';
import { COLOR_THEME } from '@/constants/theme';
import { ThemeColors } from '@/types';
import { CheckboxProps } from './types';
import Typography from '../Typography';
import Icon from '@/core/components/Icon';

const Checkbox = forwardRef(
  (
    {
      label,
      theme,
      type = CHECKBOX_TYPE['CHECK'],
      svgSize = SVG_SIZE['SIZE_24'],
      gap = GAP['GAP_10'],
      isCircle = false,
      className,
      disabled,
      iconKey,
      colorTheme = COLOR_THEME['PRIMARY'],
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
            CHECKBOX_COLOR_THEME[colorTheme],
            `text-gray-05 peer-disabled:text-gray-03`,
          )}
          iconKey={
            !isCircle ? CHECKBOX_ICON_KEY[type] : CHECKBOX_CIRCLE_ICON_KEY[type]
          }
          weight='fill'
        />
        {label && (
          <Typography
            theme={theme}
            color={
              (!disabled
                ? THEME_COLOR['GRAY_08']
                : THEME_COLOR['GRAY_03']) as ThemeColors
            }
            text={label}
          />
        )}
      </label>
    );
  },
);

export default Checkbox;

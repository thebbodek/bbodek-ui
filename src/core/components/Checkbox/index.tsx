import clsx from 'clsx';
import React, { forwardRef, MouseEvent, useId } from 'react';

import Typography from '../Typography';
import {
  CHECK_BOX_GAP,
  CHECKBOX_CIRCLE_ICON_KEY,
  CHECKBOX_COLOR_THEME,
  CHECKBOX_ICON_KEY,
  CHECKBOX_SVG_SIZE,
  CHECKBOX_TYPE,
  SVG_SIZE,
} from './constants';
import { CheckboxProps } from './types';
import { THEME_COLOR } from '@/constants/color';
import { COLOR_THEME } from '@/constants/theme';
import { GAP } from '@/core/components/Button/ButtonBase/constants';
import Icon from '@/core/components/Icon';
import { ThemeColors } from '@/types';

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
      // eslint-disable-next-line @typescript-eslint/no-unused-vars -- input DOM으로 iconKey가 흘러가지 않도록 rest에서 제외하는 의도적 추출
      iconKey,
      colorTheme = COLOR_THEME['PRIMARY'],
      ...props
    }: CheckboxProps,
    ref: React.ComponentPropsWithRef<'input'>['ref'],
  ) => {
    const id = useId();

    return (
      <label
        className={clsx(
          {
            'flex items-center': label,
            'cursor-not-allowed': disabled,
            'cursor-pointer': !disabled,
          },
          label && gap && CHECK_BOX_GAP[gap],
          className,
        )}
        htmlFor={id}
        onClick={(e: MouseEvent<HTMLLabelElement>) => e.stopPropagation()}
      >
        <input
          className='peer hidden'
          disabled={disabled}
          id={id}
          ref={ref}
          type='checkbox'
          {...props}
        />
        <Icon
          className={clsx(
            CHECKBOX_SVG_SIZE[svgSize],
            CHECKBOX_COLOR_THEME[colorTheme],
            `text-gray-05 peer-disabled:opacity-50`,
          )}
          iconKey={
            !isCircle ? CHECKBOX_ICON_KEY[type] : CHECKBOX_CIRCLE_ICON_KEY[type]
          }
          weight='fill'
        />
        {label && (
          <Typography
            color={
              (!disabled
                ? THEME_COLOR['GRAY_08']
                : THEME_COLOR['GRAY_03']) as ThemeColors
            }
            text={label}
            theme={theme}
          />
        )}
      </label>
    );
  },
);

export default Checkbox;

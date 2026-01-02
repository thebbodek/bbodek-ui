import { forwardRef } from 'react';

import Typography from '../Typography';
import { FormLabelProps } from './types';
import { THEME_COLOR } from '@/constants/color';
import { THEME_TYPOGRAPHY } from '@/constants/typography';
import { ThemeColors, ThemeTypography } from '@/types';

const FormLabel = forwardRef(
  (
    {
      labelTheme = THEME_TYPOGRAPHY['BODY_02_MEDIUM'] as ThemeTypography,
      labelColor = THEME_COLOR['GRAY_06'] as ThemeColors,
      label,
      required,
      labelSubText,
    }: FormLabelProps,
    ref: React.Ref<HTMLDivElement>,
  ) => {
    return (
      <div ref={ref} className={`flex text-${labelColor} text-${labelTheme}`}>
        {label}
        {required && <span className='text-primary-03 ml-0.5'>*</span>}
        {labelSubText && (
          <Typography
            className='ml-3'
            theme='body-02-regular'
            text={labelSubText}
            color='error'
          />
        )}
      </div>
    );
  },
);

export default FormLabel;

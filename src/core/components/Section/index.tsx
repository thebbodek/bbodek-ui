import clsx from 'clsx';
import React, { forwardRef, PropsWithChildren } from 'react';

import { ROUNDED, SECTION_ROUNDED } from './constants';
import { COLOR_THEME_STYLES } from '@/constants/theme';
import { SectionProps } from './types';

const Section = forwardRef(
  <T extends React.ElementType>(
    {
      children,
      rounded = ROUNDED['ROUNDED_8'],
      colorTheme,
      color,
      backgroundColor,
      borderColor = 'gray-02',
      hasRounded = true,
      hasBorder = false,
      hasShadow = false,
      element: Element,
      ...props
    }: PropsWithChildren<SectionProps<T>>,
    ref: React.ComponentPropsWithRef<T>['ref'],
  ) => {
    const { className, ...rest } = props;
    const Component: React.ElementType = Element || 'section';
    const hasColor = color || colorTheme || backgroundColor;

    return (
      <Component
        ref={ref}
        className={clsx(
          !colorTheme && color && `text-${color}`,
          !colorTheme && backgroundColor && `bg-${backgroundColor}`,
          colorTheme && COLOR_THEME_STYLES[colorTheme],
          !hasColor && 'bg-white',
          hasRounded && SECTION_ROUNDED[rounded],
          hasBorder && `border border-${borderColor}`,
          hasShadow && 'shadow-section',
          className,
        )}
        {...rest}
      >
        {children}
      </Component>
    );
  },
);

Section.displayName = 'Section';

export default Section;

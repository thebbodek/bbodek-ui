import clsx from 'clsx';
import React, { PropsWithChildren, forwardRef } from 'react';

import { ROUNDED, SECTION_ROUNDED } from './constants';
import { SectionProps } from './types';

const Section = forwardRef(
  <T extends React.ElementType>(
    {
      children,
      rounded = ROUNDED['ROUNDED_20'],
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

    return (
      <Component
        ref={ref}
        className={clsx(
          'bg-white',
          hasRounded && SECTION_ROUNDED[rounded],
          hasBorder && 'border border-gray-02',
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

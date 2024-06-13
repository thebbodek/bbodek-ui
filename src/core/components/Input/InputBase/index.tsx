import clsx from 'clsx';
import React, { forwardRef } from 'react';

import { cn } from '@/utilities/utils';
import FormLabel from '../../FormLabel';
import Typography from '../../Typography';
import { InputBaseProps } from './types';

const InputBase = forwardRef(
  <T extends React.ElementType>(
    {
      label,
      inputId,
      rootClassName,
      element: Element,
      inputRootClassName,
      startComponent,
      inputComponent,
      endComponent,
      labelColor,
      feedback,
      borderColor = 'gray-03',
      feedbackColor = 'error',
      error = false,
      disabled = false,
      readOnly = false,
      required = false,
      ...props
    }: InputBaseProps<T>,
    ref: React.ComponentPropsWithRef<T>['ref'],
  ) => {
    const Component: React.ElementType = Element || 'div';
    const isDisabled = readOnly || disabled;
    const isVisibleEndComponent = !isDisabled && endComponent;

    return (
      <Component
        ref={ref}
        className={clsx(label && 'flex-v-stack', rootClassName)}
        {...props}
      >
        {label && (
          <label className='mb-2' htmlFor={inputId}>
            <FormLabel
              label={label}
              labelColor={labelColor}
              required={required}
            />
          </label>
        )}
        <div
          className={cn(
            `flex items-center overflow-hidden rounded-xl border bg-white px-3 py-4 text-subhead-02-regular border-${borderColor}`,
            feedback && 'mb-1',
            inputRootClassName,
            isDisabled && 'bg-gray-09',
            error && 'border-error',
          )}
        >
          {startComponent && startComponent}
          {inputComponent && inputComponent}
          {isVisibleEndComponent && endComponent}
        </div>
        {feedback ? (
          <Typography
            theme='body-03-regular'
            color={feedbackColor}
            text={feedback}
          />
        ) : null}
      </Component>
    );
  },
);

InputBase.displayName = 'InputBase';

export default InputBase;

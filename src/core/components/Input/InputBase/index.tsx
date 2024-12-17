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
      badge,
      sub,
      ...props
    }: InputBaseProps<T>,
    ref: React.ComponentPropsWithRef<T>['ref'],
  ) => {
    const Component: React.ElementType = Element || 'div';
    const isDisabled = readOnly || disabled;
    const isVisibleEndComponent = !isDisabled && endComponent;
    const hasInputLabel = badge || label || sub;

    const labelRenderer = () => {
      if (badge && label) {
        return (
          <div className={'mb-1.5 flex items-center gap-x-0.5'}>
            <div className={'flex-shrink-0'}>{badge}</div>
            <div className='flex flex-1 items-center justify-between'>
              {label && (
                <label htmlFor={inputId}>
                  <FormLabel
                    label={label}
                    labelColor={labelColor}
                    required={required}
                  />
                </label>
              )}
              {sub && sub}
            </div>
          </div>
        );
      }

      return (
        <div className='mb-1.5 flex items-center justify-between'>
          {label && (
            <label htmlFor={inputId}>
              <FormLabel
                label={label}
                labelColor={labelColor}
                required={required}
              />
            </label>
          )}
          {sub && sub}
        </div>
      );
    };

    return (
      <Component
        ref={ref}
        className={clsx(label && 'flex-v-stack', rootClassName)}
        {...props}
      >
        {hasInputLabel && labelRenderer()}
        <div
          className={cn(
            `bbodek-field-padding flex items-center overflow-hidden rounded-lg border bg-white border-${borderColor}`,
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

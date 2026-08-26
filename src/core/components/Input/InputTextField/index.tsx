import clsx from 'clsx';
import { forwardRef, useId } from 'react';

import InputBase from '../InputBase';
import { InputTextFieldProps } from './types';
import Icon from '@/core/components/Icon';
import { useInput } from '@/core/components/Input/hooks/useInput';

const InputTextField = forwardRef(
  (
    {
      labelColor,
      borderColor,
      label,
      regCallback,
      feedback,
      feedbackColor,
      badge,
      ...props
    }: InputTextFieldProps,
    ref: React.ComponentPropsWithRef<'input'>['ref'],
  ) => {
    const id = useId();
    const {
      rootClassName,
      className,
      required,
      value,
      onChange,
      autoComplete = 'off',
      readOnly: isReadOnly = false,
      error: isError = false,
      name,
      disabled = false,
      sub,
      ...rest
    } = props;
    const { inputValue, onChangeHandler, onResetInputValue } = useInput({
      value,
      regCallback,
      onChange,
      name,
    });
    const ResetIcon = (
      <Icon
        className='text-gray-05 rounded-full text-[140%]'
        iconKey='x-circle'
        weight='fill'
      />
    );

    return (
      <InputBase
        endComponent={
          <button
            className={clsx(
              'flex h-6 w-6 items-center justify-center',
              inputValue ? 'visible' : 'invisible',
            )}
            aria-label='초기화'
            type='button'
            onClick={onResetInputValue}
          >
            {ResetIcon}
          </button>
        }
        inputComponent={
          <input
            aria-disabled={disabled}
            aria-readonly={isReadOnly}
            autoComplete={autoComplete}
            className={clsx('bbodek-field', className)}
            disabled={disabled}
            id={id}
            name={name}
            readOnly={isReadOnly}
            ref={ref}
            required={required}
            type='text'
            value={inputValue}
            onChange={onChangeHandler}
            {...rest}
          />
        }
        badge={badge}
        borderColor={borderColor}
        disabled={disabled}
        error={isError}
        feedback={feedback}
        feedbackColor={feedbackColor}
        inputId={id}
        label={label}
        labelColor={labelColor}
        readOnly={isReadOnly}
        required={required}
        rootClassName={rootClassName}
        sub={sub}
      />
    );
  },
);

InputTextField.displayName = 'InputTextField';

export default InputTextField;

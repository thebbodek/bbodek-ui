import clsx from 'clsx';
import { forwardRef, useId } from 'react';

import { useInput } from '@/core/components/Input/hooks/useInput';
import InputBase from '../InputBase';
import { InputTextFieldProps } from './types';
import Icon from '@/core/components/Icon';

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
      readOnly = false,
      error = false,
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
        className={'text-gray-05 rounded-full text-[140%]'}
        iconKey={'x-circle'}
        weight={'fill'}
      />
    );

    return (
      <InputBase
        inputId={id}
        label={label}
        rootClassName={rootClassName}
        readOnly={readOnly}
        disabled={disabled}
        feedback={feedback}
        feedbackColor={feedbackColor}
        badge={badge}
        error={error}
        sub={sub}
        inputComponent={
          <input
            ref={ref}
            id={id}
            className={clsx('bbodek-field', className)}
            type='text'
            required={required}
            value={inputValue}
            onChange={onChangeHandler}
            autoComplete={autoComplete}
            readOnly={readOnly}
            disabled={disabled}
            aria-disabled={disabled}
            aria-readonly={readOnly}
            name={name}
            {...rest}
          />
        }
        endComponent={
          <button
            type='button'
            className={clsx(
              'flex h-6 w-6 items-center justify-center',
              inputValue ? 'visible' : 'invisible',
            )}
            onClick={onResetInputValue}
            aria-label='초기화'
          >
            {ResetIcon}
          </button>
        }
        required={required}
        labelColor={labelColor}
        borderColor={borderColor}
      />
    );
  },
);

InputTextField.displayName = 'InputTextField';

export default InputTextField;

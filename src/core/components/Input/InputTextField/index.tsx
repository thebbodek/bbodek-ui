import clsx from 'clsx';
import { forwardRef, useId } from 'react';

import { useInput } from '@/core/components/Input/hooks/useInput';
import { XCircle } from '@phosphor-icons/react';
import InputBase from '../InputBase';
import { InputTextFieldProps } from './types';

const InputTextField = forwardRef(
  (
    {
      labelColor,
      borderColor,
      label,
      regCallback,
      feedback,
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
      ...rest
    } = props;
    const { inputValue, onChangeHandler, onResetInputValue } = useInput({
      value,
      regCallback,
      onChange,
      name,
    });
    const ResetIcon = <XCircle size='100%' weight='fill' fill='#A9B2C7' />;

    return (
      <InputBase
        inputId={id}
        label={label}
        rootClassName={rootClassName}
        inputRootClassName='h-[3.75rem]'
        readOnly={readOnly}
        disabled={disabled}
        feedback={feedback}
        error={error}
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
            className={clsx('h-7 w-7', inputValue ? 'visible' : 'invisible')}
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

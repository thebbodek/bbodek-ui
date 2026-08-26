import clsx from 'clsx';
import { forwardRef, useId, useState } from 'react';

import InputBase from '../InputBase';
import { InputPasswordProps } from './types';
import Icon from '@/core/components/Icon';
import { useInput } from '@/core/components/Input/hooks/useInput';

const InputPassword = forwardRef(
  (
    {
      labelColor,
      label = '비밀번호',
      regCallback,
      feedback,
      badge,
      ...props
    }: InputPasswordProps,
    ref: React.ComponentPropsWithRef<'input'>['ref'],
  ) => {
    const id = useId();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const {
      readOnly: isReadOnly = false,
      disabled = false,
      rootClassName,
      className,
      required = false,
      value,
      onChange,
      autoComplete = 'off',
      error: isError = false,
      name,
      sub,
      ...rest
    } = props;
    const { inputValue, onChangeHandler } = useInput({
      value,
      regCallback,
      onChange,
      name,
    });

    const onToggleShowPassword = () => setIsPasswordVisible((v) => !v);

    return (
      <InputBase
        endComponent={
          <button
            aria-label={
              isPasswordVisible ? '비밀번호 숨기기' : '비밀번호 보이기'
            }
            className='h-6 w-6'
            type='button'
            onClick={onToggleShowPassword}
          >
            <Icon
              className='text-gray-05 text-[120%]'
              iconKey={isPasswordVisible ? 'eye-slash' : 'eye'}
              weight='fill'
            />
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
            placeholder='********'
            readOnly={isReadOnly}
            ref={ref}
            required={required}
            type={isPasswordVisible ? 'text' : 'password'}
            value={inputValue}
            onChange={onChangeHandler}
            {...rest}
          />
        }
        badge={badge}
        disabled={disabled}
        error={isError}
        feedback={feedback}
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

InputPassword.displayName = 'InputPassword';

export default InputPassword;

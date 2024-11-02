import clsx from 'clsx';
import { forwardRef, useId, useState } from 'react';

import { useInput } from '@/core/components/Input/hooks/useInput';
import InputBase from '../InputBase';
import { InputPasswordProps } from './types';
import Icon from '@/core/components/Icon';

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
    const [showPassword, setShowPassword] = useState(false);
    const {
      readOnly = false,
      disabled = false,
      rootClassName,
      className,
      required = false,
      value,
      onChange,
      autoComplete = 'off',
      error = false,
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

    const onToggleShowPassword = () => setShowPassword((v) => !v);

    return (
      <InputBase
        inputId={id}
        label={label}
        rootClassName={rootClassName}
        inputRootClassName='h-[3.75rem]'
        error={error}
        readOnly={readOnly}
        disabled={disabled}
        required={required}
        feedback={feedback}
        labelColor={labelColor}
        badge={badge}
        sub={sub}
        inputComponent={
          <input
            ref={ref}
            id={id}
            className={clsx('bbodek-field', className)}
            type={showPassword ? 'text' : 'password'}
            required={required}
            value={inputValue}
            readOnly={readOnly}
            disabled={disabled}
            onChange={onChangeHandler}
            autoComplete={autoComplete}
            aria-disabled={disabled}
            aria-readonly={readOnly}
            placeholder={'********'}
            name={name}
            {...rest}
          />
        }
        endComponent={
          <button
            type='button'
            className='h-6 w-6'
            onClick={onToggleShowPassword}
            aria-label={showPassword ? '비밀번호 숨기기' : '비밀번호 보이기'}
          >
            <Icon
              weight='fill'
              className={'text-[1.5rem] text-gray-05'}
              iconKey={showPassword ? 'eye-slash' : 'eye'}
            />
          </button>
        }
      />
    );
  },
);

InputPassword.displayName = 'InputPassword';

export default InputPassword;

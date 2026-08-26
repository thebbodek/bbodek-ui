import clsx from 'clsx';
import { forwardRef, useId, useState } from 'react';

import InputBase from '../InputBase';
import { InputSelectProps } from './types';

const InputSelect = forwardRef(
  (
    { options, placeholder, value, badge, ...props }: InputSelectProps,
    ref: React.Ref<HTMLSelectElement>,
  ) => {
    const id = useId();
    const [isSelectedValue, setIsSelectedValue] = useState(false);
    const {
      label,
      rootClassName,
      className,
      onChange,
      required,
      error: isError,
      sub,
      ...rest
    } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
      if (!isSelectedValue) {
        setIsSelectedValue(true);
      }

      onChange?.(e);
    };

    return (
      <InputBase
        inputComponent={
          <select
            className={clsx(
              'w-full cursor-pointer outline-hidden',
              !value && !isSelectedValue ? 'text-gray-05' : 'text-gray-08',
              className,
            )}
            ref={ref}
            required={required}
            value={value}
            onChange={onChangeHandler}
            {...rest}
          >
            <option value='' disabled hidden selected>
              {placeholder}
            </option>
            {options}
          </select>
        }
        badge={badge}
        error={isError}
        inputId={id}
        label={label}
        required={required}
        rootClassName={rootClassName}
        sub={sub}
      />
    );
  },
);

export default InputSelect;

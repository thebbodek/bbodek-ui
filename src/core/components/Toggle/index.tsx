import clsx from 'clsx';
import { useId } from 'react';

import FormLabel from '../FormLabel';
import { TOGGLE_CIRCLE_SIZE, TOGGLE_SIZE } from './constants';
import { ToggleProps } from './types';

const Toggle = ({
  size,
  label,
  className,
  onChange,
  checked,
  disabled = false,
  reverse = false,
  labelTheme,
  labelColor,
  required,
}: ToggleProps) => {
  const id = useId();

  return (
    <label
      htmlFor={id}
      className={clsx(
        'flex cursor-pointer items-center gap-x-1',
        reverse && 'flex-row-reverse',
        className,
      )}
    >
      {label && (
        <FormLabel
          labelTheme={labelTheme}
          label={label}
          labelColor={labelColor}
          required={required}
        />
      )}
      <input
        id={id}
        type='checkbox'
        className='peer hidden'
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <div
        className={clsx(
          'bg-gray-03 peer-checked:bg-primary-03 peer-disabled:bg-gray-09 relative rounded-full transition-all peer-disabled:cursor-not-allowed peer-checked:[&>.circle]:-left-[0.125rem]',
          TOGGLE_SIZE[size],
        )}
      >
        <div
          className={clsx(
            'circle border-gray-03 absolute top-1/2 left-[0.125rem] translate-x-0 -translate-y-1/2 transform rounded-full border border-solid bg-white transition-all',
            TOGGLE_CIRCLE_SIZE[size],
          )}
        />
      </div>
    </label>
  );
};

export default Toggle;

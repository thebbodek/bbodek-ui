import clsx from 'clsx';
import { forwardRef, KeyboardEvent, Ref, useContext } from 'react';

import { DropdownContext } from './index';
import { DropdownContextValue, DropdownTriggerProps } from './types';
import { KEYBOARD_DOWN_KEY } from '@/core/components/Dropdown/DropdownBase/constants';

const DropdownTrigger = forwardRef(
  (
    { onClick, className, children, ...props }: DropdownTriggerProps,
    ref: Ref<HTMLButtonElement>,
  ) => {
    const { isToggle, readOnly, disabled, setIsToggle, listboxRef } =
      useContext(DropdownContext) as DropdownContextValue;
    const content =
      typeof children === 'function'
        ? children({ isToggle, readOnly, disabled })
        : children;
    const isDisabled = readOnly || disabled;

    const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (isDisabled) return;

      setIsToggle((v) => !v);
      onClick?.(e);
    };

    const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
      if (isDisabled) return;

      if (isToggle && e.key === KEYBOARD_DOWN_KEY.ARROW_DOWN) {
        e.preventDefault();

        listboxRef && listboxRef.current?.focus();
      }
    };

    return (
      <button
        ref={ref}
        type='button'
        onClick={onClickHandler}
        onKeyDown={onKeyDown}
        className={clsx(
          'h-full',
          isDisabled
            ? 'bg-gray-09 cursor-not-allowed'
            : 'cursor-pointer bg-white',
          className,
        )}
        aria-haspopup='listbox'
        aria-expanded={isToggle}
        aria-disabled={disabled}
        aria-readonly={readOnly}
        {...props}
      >
        {content}
      </button>
    );
  },
);

export default DropdownTrigger;

DropdownTrigger.displayName = 'DropdownTrigger';

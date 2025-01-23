import {
  forwardRef,
  MouseEvent,
  PropsWithChildren,
  Ref,
  useContext,
} from 'react';
import clsx from 'clsx';

import { DropdownContext } from './index';
import { DropdownContextValue, DropdownItemProps } from './types';

const DropdownItem = forwardRef(
  (
    {
      children,
      onClick,
      className,
      checked,
      disabled = false,
      useCloseOnItemClick = true,
      ...props
    }: PropsWithChildren<DropdownItemProps>,
    ref: Ref<HTMLDivElement>,
  ) => {
    const { setIsToggle } = useContext(DropdownContext) as DropdownContextValue;

    const onClickHandler = (e: MouseEvent<HTMLDivElement>) => {
      if (disabled) return;

      useCloseOnItemClick && setIsToggle(false);
      onClick?.(e);
    };

    return (
      <div
        ref={ref}
        role='option'
        onClick={onClickHandler}
        className={clsx(
          'w-full rounded-md p-2',
          !disabled
            ? checked
              ? 'font-medium text-primary-03'
              : 'text-gray-07'
            : 'text-gray-03',
          disabled ? 'cursor-not-allowed' : 'cursor-pointer hover:bg-gray-00',
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

export default DropdownItem;

DropdownItem.displayName = 'DropdownItem';

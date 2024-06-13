import { PropsWithChildren, forwardRef, useContext } from 'react';

import clsx from 'clsx';
import { DropdownContext } from '.';
import { DropdownContextValue, DropdownItemProps } from './types';

const DropdownItem = forwardRef(
  (
    {
      children,
      onClick,
      className,
      ...props
    }: PropsWithChildren<DropdownItemProps>,
    ref: React.Ref<HTMLLIElement>,
  ) => {
    const { setIsToggle } = useContext(DropdownContext) as DropdownContextValue;

    const onClickHandler = (e: React.MouseEvent<HTMLLIElement>) => {
      setIsToggle(false);
      onClick?.(e);
    };

    return (
      <li
        ref={ref}
        role='option'
        onClick={onClickHandler}
        className={clsx('cursor-pointer', className)}
        {...props}
      >
        {children}
      </li>
    );
  },
);

export default DropdownItem;

DropdownItem.displayName = 'DropdownItem';

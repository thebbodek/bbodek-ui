import clsx from 'clsx';
import { forwardRef } from 'react';

import ButtonBase from '../ButtonBase';
import { ButtonProps } from './types';

const Button = forwardRef(
  (
    {
      content,
      hasUnderline = false,
      leftIcon,
      rightIcon,
      ...props
    }: ButtonProps,
    ref: React.Ref<HTMLButtonElement>,
  ) => {
    const hasIcon = leftIcon || rightIcon ? true : false;

    return (
      <ButtonBase ref={ref} hasIcon={hasIcon} {...props}>
        {leftIcon && <div>{leftIcon}</div>}
        <span className={clsx(hasUnderline && 'underline')}>{content}</span>
        {rightIcon && <div>{rightIcon}</div>}
      </ButtonBase>
    );
  },
);

export default Button;

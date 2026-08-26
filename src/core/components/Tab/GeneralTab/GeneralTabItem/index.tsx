import clsx from 'clsx';
import { forwardRef, useId } from 'react';

import { GeneralTabItemProps } from './types';
import { Typography } from '@/index';

const GeneralTabItem = forwardRef(
  (
    {
      label,
      theme = 'subhead-01-bold',
      className,
      ...props
    }: Omit<GeneralTabItemProps, 'ref'>,
    ref: React.Ref<HTMLInputElement>,
  ) => {
    const id = useId();

    return (
      <li className='flex-1'>
        <label htmlFor={id}>
          <input
            className='peer hidden'
            id={id}
            ref={ref}
            type='radio'
            {...props}
          />
          <Typography
            className={clsx(
              'block w-full cursor-pointer rounded-[1rem] bg-transparent p-2.5 text-center peer-checked:bg-white peer-checked:text-black peer-disabled:cursor-not-allowed',
              className,
            )}
            color='gray-05'
            text={label}
            theme={theme}
          >
            {label}
          </Typography>
        </label>
      </li>
    );
  },
);

export default GeneralTabItem;

GeneralTabItem.displayName = 'GeneralTabItem';

import { forwardRef, useId } from 'react';

import { TableTabItemProps } from './types';
import { Typography } from '@/index';

const TableTabItem = forwardRef(
  (
    { label, ...props }: Omit<TableTabItemProps, 'ref'>,
    ref: React.Ref<HTMLInputElement>,
  ) => {
    const id = useId();

    return (
      <li className='flex-1'>
        <label className='flex' htmlFor={id}>
          <input
            ref={ref}
            id={id}
            type='radio'
            className={'peer hidden'}
            {...props}
          />
          <Typography
            className='mb-[-0.0625rem] flex-1 cursor-pointer border-b-2 border-transparent bg-transparent pb-3 text-center peer-checked:border-b-black peer-checked:text-black'
            theme='subhead-02-bold'
            color='gray-05'
            text={label}
          />
        </label>
      </li>
    );
  },
);

TableTabItem.displayName = 'TableTabItem';

export default TableTabItem;

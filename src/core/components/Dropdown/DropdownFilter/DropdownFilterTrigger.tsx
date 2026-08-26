import clsx from 'clsx';
import { forwardRef } from 'react';

import Typography from '../../Typography';
import DropdownBase from '../DropdownBase';
import { DropdownFilterTriggerProps } from './types';
import Icon from '@/core/components/Icon';

const DropdownFilterTrigger = forwardRef(
  (
    { currentValue, ...props }: DropdownFilterTriggerProps,
    ref: React.Ref<HTMLButtonElement>,
  ) => {
    return (
      <DropdownBase.Trigger ref={ref} {...props}>
        {({ isToggle }) => (
          <div className='flex items-center justify-between gap-x-1 text-start'>
            <Typography
              className='block flex-1 truncate'
              color='gray-06'
              text={currentValue}
              theme='body-02-regular'
            />
            <Icon
              className={clsx(
                'text-gray-06',
                isToggle ? 'rotate-180' : 'rotate-0',
              )}
              iconKey='caret-down'
              weight='fill'
            />
          </div>
        )}
      </DropdownBase.Trigger>
    );
  },
);

export default DropdownFilterTrigger;

import { forwardRef } from 'react';
import clsx from 'clsx';

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
              theme='body-02-regular'
              color='gray-06'
              text={currentValue}
              className={'block flex-1 truncate'}
            />
            <Icon
              iconKey={'caret-down'}
              className={clsx(
                'text-gray-06',
                isToggle ? 'rotate-180' : 'rotate-0',
              )}
              weight={'fill'}
            />
          </div>
        )}
      </DropdownBase.Trigger>
    );
  },
);

export default DropdownFilterTrigger;

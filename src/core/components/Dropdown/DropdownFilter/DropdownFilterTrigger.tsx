import { forwardRef } from 'react';

import { CaretDown } from '@phosphor-icons/react';
import Typography from '../../Typography';
import DropdownBase from '../DropdownBase';
import { DropdownFilterTriggerProps } from './types';

const DropdownFilterTrigger = forwardRef(
  (
    { currentValue, ...props }: DropdownFilterTriggerProps,
    ref: React.Ref<HTMLButtonElement>,
  ) => {
    return (
      <DropdownBase.Trigger ref={ref} {...props}>
        {({ isToggle }) => (
          <div className='flex items-center justify-between gap-x-1'>
            <Typography
              theme='body-02-regular'
              color='gray-06'
              text={currentValue}
            />
            <CaretDown
              size='16'
              className={
                isToggle ? 'rotate-180 text-gray-06' : 'rotate-0 text-gray-06'
              }
              weight='fill'
            />
          </div>
        )}
      </DropdownBase.Trigger>
    );
  },
);

export default DropdownFilterTrigger;

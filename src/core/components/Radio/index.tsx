import clsx from 'clsx';
import { forwardRef, useId } from 'react';

import Typography from '../Typography';
import { RadioProps } from './types';
import Icon from '@/core/components/Icon';
import { SVG_SIZE } from '@/core/components/Radio/constants';

const Radio = forwardRef(
  (
    { label, svgSize = 'SIZE_24', className, ...props }: RadioProps,
    ref: React.ComponentPropsWithRef<'input'>['ref'],
  ) => {
    const id = useId();

    return (
      <label
        className={clsx(
          'cursor-pointer',
          label && 'flex items-center gap-x-2',
          className,
        )}
        htmlFor={id}
      >
        <input
          className='peer hidden'
          id={id}
          ref={ref}
          type='radio'
          {...props}
        />
        <Icon
          className={clsx(
            SVG_SIZE[svgSize],
            'text-gray-05 peer-checked:text-primary-03',
          )}
          iconKey='radio-button'
          weight='fill'
        />
        {label && <Typography text={label} />}
      </label>
    );
  },
);

export default Radio;

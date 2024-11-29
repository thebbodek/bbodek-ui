import { useEffect } from 'react';
import clsx from 'clsx';

import { ChipsParams } from '@/core/components/Chips/types';
import Chip from '@/core/components/Chip';

const Chips = ({
  className,
  rootRef,
  items,
  onDelete,
  ...props
}: ChipsParams) => {
  useEffect(() => {
    if (!rootRef.current) return;

    rootRef.current.scrollTo({
      left: rootRef.current.scrollWidth,
      behavior: 'smooth',
    });
  }, [rootRef, items]);

  return (
    <ul
      ref={rootRef}
      className={clsx('flex items-center gap-x-2 overflow-x-auto', className)}
    >
      {items.map(({ id, label }) => (
        <Chip
          element={'li'}
          key={id}
          label={label}
          className={clsx('px-3')}
          {...props}
          onDelete={onDelete && (() => onDelete({ id }))}
        />
      ))}
    </ul>
  );
};

export default Chips;

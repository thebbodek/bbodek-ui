import clsx from 'clsx';
import { useEffect } from 'react';

import Chip from '@/core/components/Chip';
import { ChipsProps } from '@/core/components/Chips/types';

const Chips = ({
  className,
  rootRef,
  items,
  onDelete,
  ...props
}: ChipsProps) => {
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

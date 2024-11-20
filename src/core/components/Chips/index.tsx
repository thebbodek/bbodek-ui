import { useEffect } from 'react';
import clsx from 'clsx';

import { ChipsParams } from '@/core/components/Chips/types';
import Chip from '@/core/components/Chip';

const Chips = ({ className, rootRef, items, onDelete }: ChipsParams) => {
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
          onDelete={onDelete && (() => onDelete({ id }))}
          className={'whitespace-nowrap px-3'}
        />
      ))}
    </ul>
  );
};

export default Chips;

import clsx from 'clsx';
import { forwardRef } from 'react';

import { DropdownItemsProps } from './types';
import InputSearch from '@/core/components/Input/InputSearch';

const DropdownItems = forwardRef(
  (
    {
      rootClassName,
      className,
      items,
      useSearch,
      inputProps,
      ...props
    }: DropdownItemsProps,
    ref: React.Ref<HTMLUListElement>,
  ) => {
    const {
      rounded,
      rootClassName: inputRootClassName,
      placeholder,
      ...restInputProps
    } = inputProps ?? {};

    return (
      <div
        className={clsx(
          'border-gary-02 absolute z-10 mt-2 min-w-full overflow-hidden whitespace-nowrap rounded-xl border bg-white ',
          useSearch && 'flex-v-stack',
          rootClassName,
        )}
        role='listbox'
      >
        {useSearch && (
          <InputSearch
            rounded={rounded ?? 'rounded-8'}
            rootElement={'div'}
            placeholder={placeholder ?? '검색어를 입력하세요'}
            rootClassName={clsx(
              'border-b border-b-gray-02 px-3 py-2',
              inputRootClassName,
            )}
            {...restInputProps}
          />
        )}
        <ul ref={ref} className={clsx('flex-v-stack', className)} {...props}>
          {items}
        </ul>
      </div>
    );
  },
);

export default DropdownItems;

DropdownItems.displayName = 'DropdownItems';

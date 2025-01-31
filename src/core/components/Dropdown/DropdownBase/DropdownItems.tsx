import { forwardRef, Ref, useRef } from 'react';
import clsx from 'clsx';

import { DropdownItemsProps } from './types';
import InputSearch from '@/core/components/Input/InputSearch';
import VirtualList from '@/core/components/Virtual/VirtualList';

const DropdownItems = forwardRef(
  (
    {
      rootClassName,
      className,
      items,
      useSearch,
      inputProps,
      gap,
      itemHeight = 40,
    }: DropdownItemsProps,
    ref: Ref<HTMLDivElement>,
  ) => {
    const listRef = useRef<HTMLUListElement>(null);
    const {
      rounded,
      rootClassName: inputRootClassName,
      placeholder,
      ...restInputProps
    } = inputProps ?? {};

    return (
      <div
        ref={ref}
        className={clsx(
          'overflow-hidden rounded-lg border border-gray-03 bg-white shadow-md',
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
              'border-b border-b-gray-02 p-2',
              inputRootClassName,
            )}
            {...restInputProps}
          />
        )}
        <VirtualList
          ref={listRef}
          listElement={'ul'}
          itemHeight={itemHeight}
          itemsTotalCount={items.length}
          gap={gap}
          className={clsx('overflow-x-hidden whitespace-nowrap p-1', className)}
        >
          {({ startIndex, endIndex, getTopPosition }) =>
            items.slice(startIndex, endIndex).map((item, index) => (
              <VirtualList.Item
                key={index}
                element={'li'}
                topPosition={getTopPosition({ index })}
                height={itemHeight}
              >
                {item}
              </VirtualList.Item>
            ))
          }
        </VirtualList>
      </div>
    );
  },
);

export default DropdownItems;

DropdownItems.displayName = 'DropdownItems';

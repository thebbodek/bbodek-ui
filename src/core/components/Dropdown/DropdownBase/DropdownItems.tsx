import { forwardRef, Ref, useEffect, useRef } from 'react';
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
      inputRef,
      ...restInputProps
    } = inputProps ?? {};

    useEffect(() => {
      if (!inputRef || !inputRef['current'] || !useSearch) return;

      inputRef.current.focus();
    }, [inputRef, useSearch]);

    return (
      <div
        ref={ref}
        className={clsx(
          'border-gray-03 overflow-hidden rounded-lg border bg-white shadow-md',
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
            inputRef={inputRef}
            rootClassName={clsx(
              'border-b-gray-02 border-b p-2',
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
          className={clsx('overflow-x-hidden p-1 whitespace-nowrap', className)}
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

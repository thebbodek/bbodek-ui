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
      style,
      ...props
    }: DropdownItemsProps,
    ref: React.Ref<HTMLDivElement>,
  ) => {
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
          'overflow-hidden rounded-lg border border-gray-03 bg-white',
          useSearch && 'flex-v-stack',
          rootClassName,
        )}
        style={style}
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
        <ul
          className={clsx('flex-v-stack whitespace-nowrap', className)}
          {...props}
        >
          {items}
        </ul>
      </div>
    );
  },
);

export default DropdownItems;

DropdownItems.displayName = 'DropdownItems';

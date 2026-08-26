import clsx from 'clsx';
import { useRef } from 'react';

import { SEARCH_DROPDOWN_EMPTY_ITEM_KEY } from '@/core/components/Dropdown/DropdownSearch/constants';
import {
  DropdownSearchItemsProps,
  DropdownSearchLabelType,
  DropdownSearchValueType,
} from '@/core/components/Dropdown/DropdownSearch/types';
import DropdownSelect from '@/core/components/Dropdown/DropdownSelect';

const DropdownSearchItems = <
  T extends DropdownSearchValueType,
  P extends DropdownSearchLabelType,
>({
  currentValue,
  filteredOptions,
  onChange,
  searchValue,
  onSearchChange,
  itemsProps,
}: DropdownSearchItemsProps<T, P>) => {
  const { inputProps, className, itemHeight, ...props } = itemsProps ?? {};
  const inputRef = useRef<HTMLInputElement>(null);
  const hasSearchedOptions = filteredOptions.length > 0;

  const ITEMS = filteredOptions.map(({ label, value, sub, disabled }) => (
    <DropdownSelect.Item
      checked={currentValue === value}
      className={clsx(sub && 'flex items-center gap-2')}
      disabled={disabled}
      key={value}
      onClick={() => {
        onChange?.({ label, value });
        onSearchChange('');
      }}
    >
      {label}
      {sub && <div className='shrink-0'>{sub}</div>}
    </DropdownSelect.Item>
  ));

  const renderer = () => {
    if (hasSearchedOptions) {
      return ITEMS;
    } else {
      return [
        <div
          className='text-body-01-medium text-gray-05 flex flex-1 items-center justify-center'
          key={SEARCH_DROPDOWN_EMPTY_ITEM_KEY}
        >
          검색된 결과가 없습니다
        </div>,
      ];
    }
  };

  return (
    <DropdownSelect.Items
      inputProps={{
        value: searchValue,
        onChange: (e) => onSearchChange(e.target.value),
        inputRef,
        ...inputProps,
      }}
      className={clsx('max-h-56', className)}
      itemHeight={!hasSearchedOptions ? 100 : itemHeight}
      items={renderer()}
      {...props}
      useSearch
    />
  );
};

export default DropdownSearchItems;

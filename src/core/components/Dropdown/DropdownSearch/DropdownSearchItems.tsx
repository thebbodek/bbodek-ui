import clsx from 'clsx';
import { useRef } from 'react';

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
      key={value}
      checked={currentValue === value}
      onClick={() => {
        onChange?.({ label, value });
        onSearchChange('');
      }}
      className={clsx(sub && 'flex items-center gap-2')}
      disabled={disabled}
    >
      {label}
      {sub && <div className={'shrink-0'}>{sub}</div>}
    </DropdownSelect.Item>
  ));

  const renderer = () => {
    if (hasSearchedOptions) {
      return ITEMS;
    } else {
      return [
        <div
          key={'empty'}
          className='text-body-01-medium text-gray-05 flex flex-1 items-center justify-center'
        >
          검색된 결과가 없습니다
        </div>,
      ];
    }
  };

  return (
    <DropdownSelect.Items
      items={renderer()}
      inputProps={{
        value: searchValue,
        onChange: (e) => onSearchChange(e.target.value),
        inputRef,
        ...inputProps,
      }}
      itemHeight={!hasSearchedOptions ? 100 : itemHeight}
      className={clsx('max-h-[14rem]', className)}
      {...props}
      useSearch
    />
  );
};

export default DropdownSearchItems;

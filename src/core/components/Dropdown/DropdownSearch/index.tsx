import { useEffect, useState } from 'react';

import DropdownSearchItems from '@/core/components/Dropdown/DropdownSearch/DropdownSearchItems';
import DropdownSearchTrigger from '@/core/components/Dropdown/DropdownSearch/DropdownSearchTrigger';
import {
  DropdownSearchLabelType,
  DropdownSearchOption,
  DropdownSearchProps,
  DropdownSearchValueType,
} from '@/core/components/Dropdown/DropdownSearch/types';
import DropdownSelect from '@/core/components/Dropdown/DropdownSelect';
import { filterSearch } from '@/utilities/search';

const DropdownSearch = <
  T extends DropdownSearchValueType,
  P extends DropdownSearchLabelType,
>({
  currentValue,
  options,
  onChange,
  onClose,
  itemsProps,
  triggerProps,
  placeholder,
  ...props
}: DropdownSearchProps<T, P>) => {
  const [searchValue, setSearchValue] = useState('');
  const [filteredOptions, setFilteredOptions] = useState<
    DropdownSearchOption<T, P>[]
  >([]);

  const updateFilterOptions = (keyword: string) => {
    const searchedOptions = options.filter(({ label, text }) =>
      filterSearch({ str: text ?? (label as string), keyword }),
    );

    setFilteredOptions(searchedOptions);
  };

  const onSearchChange = (value: string) => {
    setSearchValue(value);
    updateFilterOptions(value);
  };

  const handleClose = () => {
    onSearchChange('');
    onClose?.();
  };

  useEffect(() => {
    setFilteredOptions(options);
  }, [options]);

  return (
    <DropdownSelect
      content={
        <DropdownSearchItems
          currentValue={currentValue}
          filteredOptions={filteredOptions}
          itemsProps={itemsProps}
          searchValue={searchValue}
          onChange={onChange}
          onSearchChange={onSearchChange}
        />
      }
      trigger={
        <DropdownSearchTrigger
          currentValue={currentValue}
          options={options}
          placeholder={placeholder}
          triggerProps={triggerProps}
          onClose={handleClose}
        />
      }
      onClose={handleClose}
      {...props}
    />
  );
};

export default DropdownSearch;

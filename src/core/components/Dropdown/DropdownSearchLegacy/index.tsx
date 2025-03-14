import { useEffect, useRef, useState, useTransition } from 'react';

import {
  DropdownSearchLegacyOption,
  DropdownSearchLegacyProps,
  DropdownSearchLegacyValueType,
} from './types';
import { filterSearch } from '@/utilities/search';
import DropdownBase from '../DropdownBase';
import DropdownSearchLegacyTrigger from '@/core/components/Dropdown/DropdownSearchLegacy/DropdownSearchLegacyTrigger';
import DropdownSearchLegacyItems from '@/core/components/Dropdown/DropdownSearchLegacy/DropdownSearchLegacyItems';

const DropdownSearch = <T extends DropdownSearchLegacyValueType>({
  currentValue,
  options,
  className,
  placeholder,
  inputPlaceholder = '검색어를 입력해주세요',
  error,
  onChange,
  itemHeight,
  rootClassName,
  onClose,
  itemsClassName,
  ...props
}: DropdownSearchLegacyProps<T>) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isSearching, startTransition] = useTransition();
  const [searchValue, setSearchValue] = useState('');
  const [filteredOptions, setFilteredOptions] = useState<
    DropdownSearchLegacyOption<T>[]
  >([]);

  const transitionSearch = (keyword: string) => {
    startTransition(() => {
      const searchedOptions = options.filter(({ label, text }) =>
        filterSearch({ str: text ?? (label as string), keyword }),
      );

      setFilteredOptions(searchedOptions);
    });
  };

  const updateSearchValue = (value: string) => {
    setSearchValue(value);
    transitionSearch(value);
  };

  const handleClose = () => {
    updateSearchValue('');
    onClose?.();
  };

  useEffect(() => {
    setFilteredOptions(options);
  }, [options]);

  return (
    <DropdownBase
      trigger={
        <DropdownSearchLegacyTrigger
          options={options}
          currentValue={currentValue}
          className={className}
          placeholder={placeholder}
          error={error}
          searchValue={searchValue}
          inputRef={inputRef}
          inputPlaceholder={inputPlaceholder}
          updateSearchValue={updateSearchValue}
          close={handleClose}
        />
      }
      content={
        <DropdownSearchLegacyItems
          isSearching={isSearching}
          currentValue={currentValue}
          filteredOptions={filteredOptions}
          onChange={onChange}
          updateSearchValue={updateSearchValue}
          itemHeight={itemHeight}
          itemsClassName={itemsClassName}
        />
      }
      className={rootClassName}
      onClose={handleClose}
      {...props}
    />
  );
};

export default DropdownSearch;

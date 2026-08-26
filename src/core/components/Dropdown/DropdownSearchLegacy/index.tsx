import { useEffect, useRef, useState, useTransition } from 'react';

import DropdownBase from '../DropdownBase';
import {
  DropdownSearchLegacyOption,
  DropdownSearchLegacyProps,
  DropdownSearchLegacyValueType,
} from './types';
import DropdownSearchLegacyItems from '@/core/components/Dropdown/DropdownSearchLegacy/DropdownSearchLegacyItems';
import DropdownSearchLegacyTrigger from '@/core/components/Dropdown/DropdownSearchLegacy/DropdownSearchLegacyTrigger';
import { filterSearch } from '@/utilities/search';

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
      content={
        <DropdownSearchLegacyItems
          currentValue={currentValue}
          filteredOptions={filteredOptions}
          isSearching={isSearching}
          itemHeight={itemHeight}
          itemsClassName={itemsClassName}
          updateSearchValue={updateSearchValue}
          onChange={onChange}
        />
      }
      trigger={
        <DropdownSearchLegacyTrigger
          className={className}
          close={handleClose}
          currentValue={currentValue}
          error={error}
          inputPlaceholder={inputPlaceholder}
          inputRef={inputRef}
          options={options}
          placeholder={placeholder}
          searchValue={searchValue}
          updateSearchValue={updateSearchValue}
        />
      }
      className={rootClassName}
      onClose={handleClose}
      {...props}
    />
  );
};

export default DropdownSearch;

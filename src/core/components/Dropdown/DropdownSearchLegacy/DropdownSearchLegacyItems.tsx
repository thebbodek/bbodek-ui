import DropdownBase from '@/core/components/Dropdown/DropdownBase';
import DropdownSearchLegacyItem from '@/core/components/Dropdown/DropdownSearchLegacy/DropdownSearchLegacyItem';
import {
  DropdownSearchLegacyItemsProps,
  DropdownSearchLegacyValueType,
} from '@/core/components/Dropdown/DropdownSearchLegacy/types';
import Icon from '@/core/components/Icon';

const DropdownSearchLegacyItems = <T extends DropdownSearchLegacyValueType>({
  currentValue,
  isSearching,
  filteredOptions,
  onChange,
  updateSearchValue,
  itemHeight,
  itemsClassName,
  useSearch,
}: DropdownSearchLegacyItemsProps<T>) => {
  const hasSearchedOptions = !isSearching && filteredOptions.length > 0;

  const renderer = () => {
    if (!isSearching) {
      if (hasSearchedOptions) {
        return filteredOptions.map((option) => (
          <DropdownSearchLegacyItem
            key={option.value}
            option={option}
            currentValue={currentValue}
            onChange={onChange}
            updateSearchValue={updateSearchValue}
          />
        ));
      } else {
        return [
          <div
            key={'empty'}
            className='text-body-01-medium text-gray-05 flex flex-1 items-center justify-center text-center'
          >
            검색된 결과가 없습니다
          </div>,
        ];
      }
    }

    return [
      <div key={'loading'} className='flex flex-1 items-center justify-center'>
        <Icon
          iconKey='circle-notch'
          className='text-subhead-01-regular animate-spin'
        />
      </div>,
    ];
  };

  return (
    <DropdownBase.Items
      className={itemsClassName || 'max-h-[12rem]'}
      itemHeight={isSearching || !hasSearchedOptions ? 80 : itemHeight}
      items={renderer()}
      useSearch={useSearch}
    />
  );
};

export default DropdownSearchLegacyItems;

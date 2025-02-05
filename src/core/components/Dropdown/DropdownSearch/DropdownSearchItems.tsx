import {
  DropdownSearchItemsProps,
  DropdownSearchValueType,
} from '@/core/components/Dropdown/DropdownSearch/types';
import Icon from '@/core/components/Icon';
import DropdownSearchItem from '@/core/components/Dropdown/DropdownSearch/DropdownSearchItem';
import DropdownBase from '@/core/components/Dropdown/DropdownBase';

const DropdownSearchItems = <T extends DropdownSearchValueType>({
  currentValue,
  isSearching,
  filteredOptions,
  onChange,
  updateSearchValue,
  itemHeight,
  itemsClassName,
}: DropdownSearchItemsProps<T>) => {
  const hasSearchedOptions = !isSearching && filteredOptions.length > 0;

  const renderer = () => {
    if (!isSearching) {
      if (hasSearchedOptions) {
        return filteredOptions.map((option) => (
          <DropdownSearchItem
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
            className='flex flex-1 items-center justify-center text-center text-body-01-medium text-gray-05'
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
          className='animate-spin text-subhead-01-regular'
        />
      </div>,
    ];
  };

  return (
    <DropdownBase.Items
      className={itemsClassName || 'max-h-[12rem]'}
      itemHeight={isSearching || !hasSearchedOptions ? 80 : itemHeight}
      items={renderer()}
    />
  );
};

export default DropdownSearchItems;

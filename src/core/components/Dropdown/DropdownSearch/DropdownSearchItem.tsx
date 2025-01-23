import clsx from 'clsx';

import {
  DropdownSearchItemProps,
  DropdownSearchValueType,
} from '@/core/components/Dropdown/DropdownSearch/types';
import DropdownBase from '@/core/components/Dropdown/DropdownBase';

const DropdownSearchItem = <T extends DropdownSearchValueType>({
  currentValue,
  option,
  onChange,
  updateSearchValue,
}: DropdownSearchItemProps<T>) => {
  const { label, value, sub, disabled = false } = option;
  const checked = currentValue === value;
  const isString = typeof label === 'string';

  const renderer = () => {
    if (!isString) return label;

    return (
      <span className={'block truncate'} title={label}>
        {label}
      </span>
    );
  };

  return (
    <DropdownBase.Item
      checked={checked}
      className={clsx('text-body-01-regular', sub && 'flex items-center gap-2')}
      onClick={() => {
        onChange?.(value);
        updateSearchValue('');
      }}
      disabled={disabled}
    >
      {renderer()}
      {sub && <div className={'flex-shrink-0'}>{sub}</div>}
    </DropdownBase.Item>
  );
};

export default DropdownSearchItem;

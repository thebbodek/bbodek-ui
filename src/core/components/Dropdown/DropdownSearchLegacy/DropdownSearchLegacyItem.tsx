import clsx from 'clsx';

import DropdownBase from '@/core/components/Dropdown/DropdownBase';
import {
  DropdownSearchLegacyItemProps,
  DropdownSearchLegacyValueType,
} from '@/core/components/Dropdown/DropdownSearchLegacy/types';

const DropdownSearchLegacyItem = <T extends DropdownSearchLegacyValueType>({
  currentValue,
  option,
  onChange,
  updateSearchValue,
}: DropdownSearchLegacyItemProps<T>) => {
  const { label, value, sub, disabled = false } = option;
  const checked = currentValue === value;
  const isString = typeof label === 'string';

  const renderer = () => {
    if (!isString) return label;

    return (
      <span className='block truncate' title={label}>
        {label}
      </span>
    );
  };

  return (
    <DropdownBase.Item
      checked={checked}
      className={clsx('text-body-01-regular', sub && 'flex items-center gap-2')}
      disabled={disabled}
      onClick={() => {
        onChange?.({ label, value });
        updateSearchValue('');
      }}
    >
      {renderer()}
      {sub && <div className='shrink-0'>{sub}</div>}
    </DropdownBase.Item>
  );
};

export default DropdownSearchLegacyItem;

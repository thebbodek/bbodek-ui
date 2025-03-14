import clsx from 'clsx';

import {
  DropdownSearchLegacyItemProps,
  DropdownSearchLegacyValueType,
} from '@/core/components/Dropdown/DropdownSearchLegacy/types';
import DropdownBase from '@/core/components/Dropdown/DropdownBase';

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
        onChange?.({ label, value });
        updateSearchValue('');
      }}
      disabled={disabled}
    >
      {renderer()}
      {sub && <div className={'flex-shrink-0'}>{sub}</div>}
    </DropdownBase.Item>
  );
};

export default DropdownSearchLegacyItem;

import { useContext } from 'react';

import {
  DropdownSearchLabelType,
  DropdownSearchTriggerProps,
  DropdownSearchValueType,
} from '@/core/components/Dropdown/DropdownSearch/types';
import { DropdownContext } from '@/core/components/Dropdown/DropdownBase';
import { DropdownContextValue } from '@/core/components/Dropdown/DropdownBase/types';
import DropdownSelect from '@/core/components/Dropdown/DropdownSelect';

const DropdownSearchTrigger = <
  T extends DropdownSearchValueType,
  P extends DropdownSearchLabelType,
>({
  currentValue,
  options,
  placeholder,
  triggerProps = {},
  onClose,
}: DropdownSearchTriggerProps<T, P>) => {
  const { onClick } = triggerProps;
  const { isToggle } = useContext(DropdownContext) as DropdownContextValue;
  const label = options.find((option) => option.value === currentValue)?.label;

  return (
    <DropdownSelect.Trigger
      placeholder={placeholder}
      currentValue={label}
      onClick={(e) => {
        isToggle && onClose();
        onClick?.(e);
      }}
      {...triggerProps}
    />
  );
};

export default DropdownSearchTrigger;

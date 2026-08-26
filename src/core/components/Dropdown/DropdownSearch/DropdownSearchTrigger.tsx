import { useContext } from 'react';

import { DropdownContext } from '@/core/components/Dropdown/DropdownBase';
import { DropdownContextValue } from '@/core/components/Dropdown/DropdownBase/types';
import {
  DropdownSearchLabelType,
  DropdownSearchTriggerProps,
  DropdownSearchValueType,
} from '@/core/components/Dropdown/DropdownSearch/types';
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
      currentValue={label}
      placeholder={placeholder}
      onClick={(e) => {
        if (isToggle) {
          onClose();
        }

        onClick?.(e);
      }}
      {...triggerProps}
    />
  );
};

export default DropdownSearchTrigger;

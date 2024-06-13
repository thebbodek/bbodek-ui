import DropdownBase from '../DropdownBase';
import { ReturnType } from './types';
import DropdownSelectItems from '@/core/components/Dropdown/DropdownSelect/DropdownSelectItems';
import DropdownMultipleItem from '@/core/components/Dropdown/DropdownMultiple/DropdownMultipleItem';
import DropdownMultipleTrigger from '@/core/components/Dropdown/DropdownMultiple/DropdownMultipleTrigger';
import { DropdownProps } from '@/core/components/Dropdown/DropdownBase/types';

const DropdownMultiple = ({ ...props }: DropdownProps) => {
  return <DropdownBase {...props} />;
};

export default DropdownMultiple as unknown as ReturnType;

DropdownMultiple.displayName = 'DropdownMultiple';
DropdownMultiple.Trigger = DropdownMultipleTrigger;
DropdownMultiple.Items = DropdownSelectItems;
DropdownMultiple.Item = DropdownMultipleItem;

import { ReturnType } from './types';
import { DropdownProps } from '@/core/components/Dropdown/DropdownBase/types';
import DropdownBase from '../DropdownBase';
import DropdownMultipleItem from '@/core/components/Dropdown/DropdownMultiple/DropdownMultipleItem';
import DropdownMultipleTrigger from '@/core/components/Dropdown/DropdownMultiple/DropdownMultipleTrigger';
import DropdownItems from '@/core/components/Dropdown/DropdownBase/DropdownItems';

const DropdownMultiple = ({ ...props }: DropdownProps) => {
  return <DropdownBase {...props} />;
};

export default DropdownMultiple as unknown as ReturnType;

DropdownMultiple.displayName = 'DropdownMultiple';
DropdownMultiple.Trigger = DropdownMultipleTrigger;
DropdownMultiple.Items = DropdownItems;
DropdownMultiple.Item = DropdownMultipleItem;

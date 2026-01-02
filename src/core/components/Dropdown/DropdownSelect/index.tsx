import DropdownBase from '../DropdownBase';
import { DropdownProps } from '../DropdownBase/types';
import DropdownSelectItem from './DropdownSelectItem';
import DropdownSelectTrigger from './DropdownSelectTrigger';
import { ReturnType } from './types';
import DropdownItems from '@/core/components/Dropdown/DropdownBase/DropdownItems';

const DropdownSelect = ({ ...props }: DropdownProps) => {
  return <DropdownBase {...props} />;
};

export default DropdownSelect as unknown as ReturnType;

DropdownSelect.displayName = 'DropdownSelect';
DropdownSelect.Trigger = DropdownSelectTrigger;
DropdownSelect.Items = DropdownItems;
DropdownSelect.Item = DropdownSelectItem;

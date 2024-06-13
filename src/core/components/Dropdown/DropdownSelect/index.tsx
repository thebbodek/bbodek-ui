import DropdownBase from '../DropdownBase';
import { DropdownProps } from '../DropdownBase/types';
import DropdownSelectItem from './DropdownSelectItem';
import DropdownSelectItems from './DropdownSelectItems';
import DropdownSelectTrigger from './DropdownSelectTrigger';
import { ReturnType } from './types';

const DropdownSelect = ({ ...props }: DropdownProps) => {
  return <DropdownBase {...props} />;
};

export default DropdownSelect as unknown as ReturnType;

DropdownSelect.displayName = 'DropdownSelect';
DropdownSelect.Trigger = DropdownSelectTrigger;
DropdownSelect.Items = DropdownSelectItems;
DropdownSelect.Item = DropdownSelectItem;

import DropdownBase from '../DropdownBase';
import { DropdownProps } from '../DropdownBase/types';
import DropdownFilterItem from './DropdownFilterItem';
import DropdownFilterItems from './DropdownFilterItems';
import DropdownFilterTrigger from './DropdownFilterTrigger';
import { ReturnType } from './types';

const DropdownFilter = ({ ...props }: DropdownProps) => {
  return <DropdownBase {...props} />;
};

export default DropdownFilter as unknown as ReturnType;

DropdownFilter.displayName = 'DropdownFilter';
DropdownFilter.Trigger = DropdownFilterTrigger;
DropdownFilter.Items = DropdownFilterItems;
DropdownFilter.Item = DropdownFilterItem;

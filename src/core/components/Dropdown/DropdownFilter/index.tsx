import DropdownBase from '../DropdownBase';
import { DropdownProps } from '../DropdownBase/types';
import DropdownFilterItem from './DropdownFilterItem';
import DropdownFilterTrigger from './DropdownFilterTrigger';
import { ReturnType } from './types';
import DropdownItems from '@/core/components/Dropdown/DropdownBase/DropdownItems';

const DropdownFilter = ({ ...props }: DropdownProps) => {
  return <DropdownBase {...props} />;
};

export default DropdownFilter as unknown as ReturnType;

DropdownFilter.displayName = 'DropdownFilter';
DropdownFilter.Trigger = DropdownFilterTrigger;
DropdownFilter.Items = DropdownItems;
DropdownFilter.Item = DropdownFilterItem;

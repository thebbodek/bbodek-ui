import { TypographyProps } from '@/core/components/Typography/types';
import {
  DropdownItemProps,
  DropdownProps,
  DropdownTriggerProps,
} from '../../DropdownBase/types';
import DropdownFilterItem from '../DropdownFilterItem';
import DropdownFilterTrigger from '../DropdownFilterTrigger';
import DropdownItems from '@/core/components/Dropdown/DropdownBase/DropdownItems';

export interface DropdownFilterTriggerProps
  extends Omit<DropdownTriggerProps, 'children'> {
  currentValue: TypographyProps['text'];
}

export interface DropdownFilterItemProps extends DropdownItemProps {
  checked: boolean;
}

type DropdownFilter = (props: DropdownProps) => React.ReactElement;

export type ReturnType = DropdownFilter & {
  displayName: string;
  Trigger: typeof DropdownFilterTrigger;
  Items: typeof DropdownItems;
  Item: typeof DropdownFilterItem;
};

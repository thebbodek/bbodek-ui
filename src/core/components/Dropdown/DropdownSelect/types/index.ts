import { ReactElement } from 'react';

import {
  DropdownItemProps,
  DropdownProps,
  DropdownTriggerProps,
} from '../../DropdownBase/types';
import DropdownSelectItem from '../DropdownSelectItem';
import DropdownSelectTrigger from '../DropdownSelectTrigger';
import DropdownItems from '@/core/components/Dropdown/DropdownBase/DropdownItems';

export interface DropdownSelectTriggerProps
  extends Omit<DropdownTriggerProps, 'children'> {
  currentValue: string;
}

export interface DropdownSelectItemProps extends DropdownItemProps {
  checked: boolean;
}

type DropdownSelect = (props: DropdownProps) => ReactElement;

export type ReturnType = DropdownSelect & {
  displayName: string;
  Trigger: typeof DropdownSelectTrigger;
  Items: typeof DropdownItems;
  Item: typeof DropdownSelectItem;
};

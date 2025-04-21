import { ReactElement, ReactNode } from 'react';

import DropdownItems from '@/core/components/Dropdown/DropdownBase/DropdownItems';
import {
  DropdownItemProps,
  DropdownProps,
  DropdownTriggerProps,
} from '../../DropdownBase/types';
import DropdownSelectItem from '../DropdownSelectItem';
import DropdownSelectTrigger from '../DropdownSelectTrigger';

export interface DropdownSelectTriggerProps
  extends Omit<DropdownTriggerProps, 'children'> {
  currentValue: ReactNode;
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

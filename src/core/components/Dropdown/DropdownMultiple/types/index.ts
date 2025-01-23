import { HTMLAttributes, MouseEvent, ReactElement } from 'react';

import {
  DropdownItemProps,
  DropdownProps,
} from '@/core/components/Dropdown/DropdownBase/types';
import DropdownMultipleTrigger from '@/core/components/Dropdown/DropdownMultiple/DropdownMultipleTrigger';
import DropdownMultipleItem from '@/core/components/Dropdown/DropdownMultiple/DropdownMultipleItem';
import DropdownItems from '@/core/components/Dropdown/DropdownBase/DropdownItems';
import { DROPDOWN_MULTIPLE_VARIANT } from '@/core/components/Dropdown/DropdownMultiple/constants';

export type DropdownMultipleVariant =
  (typeof DROPDOWN_MULTIPLE_VARIANT)[keyof typeof DROPDOWN_MULTIPLE_VARIANT];

export type ValueWithLabelType = string | number;

export interface ValueWithLabel<T extends ValueWithLabelType> {
  label: string;
  value: T;
}

export interface DropdownMultipleTriggerProps<T extends ValueWithLabelType>
  extends HTMLAttributes<HTMLDivElement> {
  currentValues: ValueWithLabel<T>[];
  variant?: DropdownMultipleVariant;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
  onDelete?: (value: T) => void;
}

export interface DropdownMultipleItemProps extends DropdownItemProps {}

type DropdownMultiple = (props: DropdownProps) => ReactElement;

export type ReturnType = DropdownMultiple & {
  displayName: string;
  Trigger: typeof DropdownMultipleTrigger;
  Items: typeof DropdownItems;
  Item: typeof DropdownMultipleItem;
};

import {
  HTMLAttributes,
  InputHTMLAttributes,
  MouseEvent,
  ReactElement,
} from 'react';

import { DropdownProps } from '@/core/components/Dropdown/DropdownBase/types';
import DropdownSelectItems from '@/core/components/Dropdown/DropdownSelect/DropdownSelectItems';
import DropdownMultipleTrigger from '@/core/components/Dropdown/DropdownMultiple/DropdownMultipleTrigger';
import DropdownMultipleItem from '@/core/components/Dropdown/DropdownMultiple/DropdownMultipleItem';
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

export interface DropdownMultipleItemProps
  extends InputHTMLAttributes<HTMLInputElement> {}

type DropdownMultiple = (props: DropdownProps) => ReactElement;

export type ReturnType = DropdownMultiple & {
  displayName: string;
  Trigger: typeof DropdownMultipleTrigger;
  Items: typeof DropdownSelectItems;
  Item: typeof DropdownMultipleItem;
};

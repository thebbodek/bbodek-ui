import { HTMLAttributes, MouseEvent, ReactElement } from 'react';

import DropdownItems from '@/core/components/Dropdown/DropdownBase/DropdownItems';
import {
  DropdownItemProps,
  DropdownProps,
} from '@/core/components/Dropdown/DropdownBase/types';
import { DROPDOWN_MULTIPLE_VARIANT } from '@/core/components/Dropdown/DropdownMultiple/constants';
import DropdownMultipleItem from '@/core/components/Dropdown/DropdownMultiple/DropdownMultipleItem';
import DropdownMultipleTrigger from '@/core/components/Dropdown/DropdownMultiple/DropdownMultipleTrigger';
import { TypographyProps } from '@/core/components/Typography/types';

export type DropdownMultipleVariant =
  (typeof DROPDOWN_MULTIPLE_VARIANT)[keyof typeof DROPDOWN_MULTIPLE_VARIANT];

export type ValueWithLabelType = string | number;

export interface ValueWithLabel<T extends ValueWithLabelType> {
  label: string;
  value: T;
}

export interface DropdownMultipleTriggerProps<T extends ValueWithLabelType>
  extends HTMLAttributes<HTMLDivElement> {
  placeholder?: TypographyProps['text'];
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

import { ReactElement, ReactNode } from 'react';

import {
  DropdownItemsProps,
  DropdownProps,
} from '@/core/components/Dropdown/DropdownBase/types';
import { DropdownSelectTriggerProps } from '@/core/components/Dropdown/DropdownSelect/types';

export type DropdownSearchValueType = string | null | number;

export type DropdownSearchLabelType = string | ReactElement;

export interface DropdownSearchOnChangeReturnType<
  T extends DropdownSearchValueType,
  P extends DropdownSearchLabelType,
> extends Pick<DropdownSearchOption<T, P>, 'label' | 'value'> {}

export interface DropdownSearchOption<
  T extends DropdownSearchValueType,
  P extends DropdownSearchLabelType,
> {
  label: P;
  value: T;
  text?: string;
  sub?: ReactNode;
  disabled?: boolean;
}

export interface DropdownSearchProps<
  T extends DropdownSearchValueType,
  P extends DropdownSearchLabelType,
>
  extends
    Omit<DropdownProps, 'trigger' | 'content'>,
    Pick<DropdownSelectTriggerProps, 'placeholder'> {
  options: DropdownSearchOption<T, P>[];
  currentValue: T | undefined;
  onChange?: ({ value }: DropdownSearchOnChangeReturnType<T, P>) => void;
  triggerProps?: Omit<
    DropdownSelectTriggerProps,
    'currentValue' | 'placeholder'
  >;
  itemsProps?: Omit<
    DropdownItemsProps,
    'useSearch' | 'items' | 'inputProps'
  > & {
    inputProps?: Omit<
      DropdownItemsProps['inputProps'],
      'value' | 'onChange' | 'inputRef'
    >;
  };
}

export interface DropdownSearchItemsProps<
  T extends DropdownSearchValueType,
  P extends DropdownSearchLabelType,
> extends Pick<
  DropdownSearchProps<T, P>,
  'currentValue' | 'onChange' | 'itemsProps'
> {
  filteredOptions: DropdownSearchOption<T, P>[];
  onSearchChange: (value: string) => void;
  searchValue: string;
}

export interface DropdownSearchTriggerProps<
  T extends DropdownSearchValueType,
  P extends DropdownSearchLabelType,
> extends Pick<
  DropdownSearchProps<T, P>,
  'currentValue' | 'options' | 'triggerProps' | 'placeholder'
> {
  onClose: () => void;
}

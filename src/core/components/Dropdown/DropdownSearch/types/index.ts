import {
  HTMLAttributes,
  MutableRefObject,
  ReactElement,
  ReactNode,
} from 'react';

import {
  DropdownItemsProps,
  DropdownProps,
  DropdownTriggerProps,
} from '@/core/components/Dropdown/DropdownBase/types';

export type DropdownSearchValueType = string | null | number;

export interface DropdownSearchOption<T extends DropdownSearchValueType> {
  label: string | ReactElement;
  value: T;
  text?: string;
  sub?: ReactNode;
  disabled?: boolean;
}

export interface DropdownSearchProps<T extends DropdownSearchValueType>
  extends Omit<DropdownProps, 'trigger' | 'content'>,
    Pick<DropdownTriggerProps, 'error' | 'placeholder'>,
    Pick<DropdownItemsProps, 'itemHeight'> {
  options: DropdownSearchOption<T>[];
  currentValue: T | undefined;
  onChange?: (value: T) => void;
  rootClassName?: HTMLAttributes<HTMLDivElement>['className'];
  inputPlaceholder?: string;
}

export interface DropdownSearchTriggerProps<T extends DropdownSearchValueType>
  extends Omit<DropdownTriggerProps, 'children' | 'currentValue'>,
    Pick<
      DropdownSearchProps<T>,
      'currentValue' | 'error' | 'placeholder' | 'options' | 'inputPlaceholder'
    > {
  searchValue: string;
  inputRef: MutableRefObject<HTMLInputElement | null>;
  updateSearchValue: (value: string) => void;
}

export interface DropdownSearchItemsProps<T extends DropdownSearchValueType>
  extends Pick<
      DropdownSearchProps<T>,
      'currentValue' | 'onChange' | 'itemHeight'
    >,
    Pick<DropdownSearchTriggerProps<T>, 'updateSearchValue'> {
  filteredOptions: DropdownSearchProps<T>['options'];
  isSearching: boolean;
}

export interface DropdownSearchItemProps<T extends DropdownSearchValueType>
  extends Pick<
    DropdownSearchItemsProps<T>,
    'currentValue' | 'onChange' | 'updateSearchValue'
  > {
  option: DropdownSearchOption<T>;
}

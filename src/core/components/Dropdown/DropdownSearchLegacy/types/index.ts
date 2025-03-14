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

export type DropdownSearchLegacyValueType = string | null | number;

export interface DropdownSearchLegacyOption<
  T extends DropdownSearchLegacyValueType,
> {
  label: string | ReactElement;
  value: T;
  text?: string;
  sub?: ReactNode;
  disabled?: boolean;
}

export interface DropdownSearchLegacyProps<
  T extends DropdownSearchLegacyValueType,
> extends Omit<DropdownProps, 'trigger' | 'content'>,
    Pick<DropdownTriggerProps, 'error' | 'placeholder'>,
    Pick<DropdownItemsProps, 'itemHeight'> {
  options: DropdownSearchLegacyOption<T>[];
  currentValue: T | undefined;
  onChange?: ({
    value,
  }: Pick<DropdownSearchLegacyOption<T>, 'label' | 'value'>) => void;
  rootClassName?: HTMLAttributes<HTMLDivElement>['className'];
  inputPlaceholder?: string;
  itemsClassName?: DropdownItemsProps['className'];
}

export interface DropdownSearchLegacyTriggerProps<
  T extends DropdownSearchLegacyValueType,
> extends Omit<DropdownTriggerProps, 'children' | 'currentValue'>,
    Pick<
      DropdownSearchLegacyProps<T>,
      'currentValue' | 'error' | 'placeholder' | 'options' | 'inputPlaceholder'
    > {
  searchValue: string;
  inputRef: MutableRefObject<HTMLInputElement | null>;
  updateSearchValue: (value: string) => void;
  close: () => void;
}

export interface DropdownSearchLegacyItemsProps<
  T extends DropdownSearchLegacyValueType,
> extends Pick<
      DropdownSearchLegacyProps<T>,
      'currentValue' | 'onChange' | 'itemHeight' | 'itemsClassName'
    >,
    Pick<DropdownSearchLegacyTriggerProps<T>, 'updateSearchValue'>,
    Pick<DropdownItemsProps, 'useSearch' | 'inputProps'> {
  filteredOptions: DropdownSearchLegacyProps<T>['options'];
  isSearching: boolean;
}

export interface DropdownSearchLegacyItemProps<
  T extends DropdownSearchLegacyValueType,
> extends Pick<
    DropdownSearchLegacyItemsProps<T>,
    'currentValue' | 'onChange' | 'updateSearchValue'
  > {
  option: DropdownSearchLegacyOption<T>;
}

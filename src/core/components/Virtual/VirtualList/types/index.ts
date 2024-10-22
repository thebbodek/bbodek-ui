import {
  ElementType,
  ForwardRefExoticComponent,
  HTMLAttributes,
  ReactNode,
  RefAttributes,
} from 'react';

import VirtualListItem from '@/core/components/Virtual/VirtualList/VirtualListItem';

export interface VirtualListChildrenProps {
  startIndex: number;
  endIndex: number;
  getTopPosition: ({ index }: GetTopPositionParams) => string;
}

export interface GetTopPositionParams {
  index: number;
}

export interface VirtualListProps<
  T extends ElementType = 'div',
  P extends ElementType = 'div',
> extends Pick<HTMLAttributes<HTMLElement>, 'className'> {
  itemHeight: number;
  itemsTotalCount: number;
  rootElement?: T;
  listElement?: P;
  children: ({
    startIndex,
    endIndex,
    getTopPosition,
  }: VirtualListChildrenProps) => ReactNode;
}

export interface VirtualListItemProps<T extends ElementType = 'div'>
  extends Pick<HTMLAttributes<HTMLElement>, 'className'> {
  element?: T;
  topPosition: string;
  height: number;
}

export type VirtualListItemComponent = ForwardRefExoticComponent<
  VirtualListProps<ElementType, ElementType> & RefAttributes<HTMLElement>
>;

export type ReturnType = VirtualListItemComponent & {
  displayName: string;
  Item: typeof VirtualListItem;
};

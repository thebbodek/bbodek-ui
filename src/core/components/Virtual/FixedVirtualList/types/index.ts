import { ElementType, HTMLAttributes, ReactNode } from 'react';

export interface FixedVirtualChildrenProps {
  startIndex: number;
  endIndex: number;
  getTopPosition: ({ index }: GetTopPositionParams) => string;
}

export interface GetTopPositionParams {
  index: number;
}

export interface FixedVirtualListProps<
  T extends ElementType = 'div',
  P extends ElementType = 'div',
> extends Pick<HTMLAttributes<HTMLElement>, 'className'> {
  containerHeight: number;
  itemHeight: number;
  itemsTotalCount: number;
  rootElement?: T;
  listElement?: P;
  children: ({
    startIndex,
    endIndex,
    getTopPosition,
  }: FixedVirtualChildrenProps) => ReactNode;
}

export interface FixedVirtualListItemProps<T extends ElementType = 'div'>
  extends Pick<HTMLAttributes<HTMLElement>, 'className'> {
  element?: T;
  topPosition: string;
  height: number;
}

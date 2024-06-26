import React, { ElementType, memo, useCallback, useRef, useState } from 'react';
import clsx from 'clsx';

import FixedVirtualListItem from '@/core/components/Virtual/FixedVirtualList/FixedVirtualListItem';
import {
  FixedVirtualListProps,
  GetTopPositionParams,
} from '@/core/components/Virtual/FixedVirtualList/types';

const FixedVirtualList = <
  T extends ElementType = 'div',
  P extends ElementType = 'div',
>({
  containerHeight,
  itemHeight,
  itemsTotalCount,
  rootElement: RootElement,
  listElement: ListElement,
  className,
  children,
}: FixedVirtualListProps<T, P>) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollTop, setScrollTop] = useState(0);
  const visibleCount = Math.ceil(containerHeight / itemHeight);
  const totalItemsHeight = itemHeight * itemsTotalCount;
  const classNames = clsx('overflow-y-auto', className);
  const RootComponent: React.ElementType = RootElement || 'div';
  const ListComponent: React.ElementType = ListElement || 'div';
  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = Math.min(itemsTotalCount - 1, startIndex + visibleCount);

  const handleScroll = () => {
    if (containerRef.current) {
      setScrollTop(containerRef.current.scrollTop);
    }
  };

  const getTopPosition = useCallback(
    ({ index }: GetTopPositionParams) =>
      `${(startIndex + index) * itemHeight}px`,
    [startIndex, itemHeight],
  );

  return (
    <RootComponent
      ref={containerRef}
      className={classNames}
      onScroll={handleScroll}
      style={{
        height: `${containerHeight}px`,
      }}
    >
      <ListComponent
        className={'relative'}
        style={{ height: `${totalItemsHeight}px` }}
      >
        {children({
          startIndex,
          endIndex: endIndex + 1,
          getTopPosition,
        })}
      </ListComponent>
    </RootComponent>
  );
};

export default FixedVirtualList;

FixedVirtualList.item = FixedVirtualListItem;

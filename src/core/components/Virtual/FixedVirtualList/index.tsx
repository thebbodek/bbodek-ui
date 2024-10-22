import React, {
  ElementType,
  forwardRef,
  useCallback,
  useRef,
  useState,
} from 'react';
import clsx from 'clsx';

import FixedVirtualListItem from '@/core/components/Virtual/FixedVirtualList/FixedVirtualListItem';
import {
  FixedVirtualListProps,
  GetTopPositionParams,
  ReturnType,
} from '@/core/components/Virtual/FixedVirtualList/types';
import { mergeRefs } from '@/utilities/ref';

const FixedVirtualList = forwardRef<HTMLElement, FixedVirtualListProps>(
  (
    {
      containerHeight,
      itemHeight,
      itemsTotalCount,
      rootElement: RootElement,
      listElement: ListElement,
      className,
      children,
    },
    ref,
  ) => {
    const containerRef = useRef<HTMLElement | null>(null);
    const [scrollTop, setScrollTop] = useState(0);
    const visibleCount = Math.ceil(containerHeight / itemHeight);
    const totalItemsHeight = itemHeight * itemsTotalCount;
    const classNames = clsx('overflow-y-auto', className);
    const RootComponent: ElementType = RootElement || 'div';
    const ListComponent: ElementType = ListElement || 'div';
    const startIndex = Math.floor(scrollTop / itemHeight);
    const endIndex = Math.min(itemsTotalCount - 1, startIndex + visibleCount);

    const handleScroll = () => {
      const refCurrent = containerRef.current as unknown as HTMLElement;

      if (refCurrent && 'scrollTop' in refCurrent) {
        setScrollTop(refCurrent.scrollTop);
      }
    };

    const getTopPosition = useCallback(
      ({ index }: GetTopPositionParams) =>
        `${(startIndex + index) * itemHeight}px`,
      [startIndex, itemHeight],
    );

    return (
      <RootComponent
        ref={mergeRefs(containerRef, ref)}
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
  },
) as unknown as ReturnType;

FixedVirtualList.displayName = 'FixedVirtualList';
FixedVirtualList.Item = FixedVirtualListItem;

export default FixedVirtualList;

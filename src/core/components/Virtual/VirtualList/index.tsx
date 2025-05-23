import clsx from 'clsx';
import React, {
  ElementType,
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import {
  GetTopPositionParams,
  ReturnType,
  VirtualListProps,
} from '@/core/components/Virtual/VirtualList/types';
import { mergeRefs } from '@/utilities/ref';
import VirtualListItem from '@/core/components/Virtual/VirtualList/VirtualListItem';

const VirtualList = forwardRef<HTMLElement, VirtualListProps>(
  (
    {
      itemHeight,
      gap = 0,
      itemsTotalCount,
      rootElement: RootElement,
      listElement: ListElement,
      className,
      listClassName,
      children,
    },
    ref,
  ) => {
    const _itemHeight = itemHeight + gap;
    const containerRef = useRef<HTMLElement | null>(null);
    const [scrollTop, setScrollTop] = useState(0);
    const [containerHeight, setContainerHeight] = useState(0);
    const visibleCount = Math.ceil(containerHeight / _itemHeight);
    const totalItemsHeight = _itemHeight * itemsTotalCount;
    const classNames = clsx('overflow-y-auto', className);
    const RootComponent: ElementType = RootElement || 'div';
    const ListComponent: ElementType = ListElement || 'div';
    const startIndex = Math.floor(scrollTop / _itemHeight);
    const endIndex = Math.min(itemsTotalCount - 1, startIndex + visibleCount);

    const handleScroll = () => {
      const refCurrent = containerRef.current as unknown as HTMLElement;

      if (refCurrent && 'scrollTop' in refCurrent) {
        setScrollTop(refCurrent.scrollTop);
      }
    };

    const getTopPosition = useCallback(
      ({ index }: GetTopPositionParams) =>
        `${(startIndex + index) * _itemHeight}px`,
      [startIndex, _itemHeight],
    );

    useEffect(() => {
      const calculateContainerHeight = () => {
        if (containerRef.current) {
          setContainerHeight(containerRef.current.clientHeight);
        }
      };

      calculateContainerHeight();

      window.addEventListener('resize', calculateContainerHeight);

      return () => {
        window.removeEventListener('resize', calculateContainerHeight);
      };
    }, []);

    return (
      <RootComponent
        ref={mergeRefs(containerRef, ref)}
        className={classNames}
        onScroll={handleScroll}
      >
        <ListComponent
          className={clsx(listClassName && listClassName, 'relative!')}
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

VirtualList.displayName = 'VirtualList';
VirtualList.Item = VirtualListItem;

export default VirtualList;

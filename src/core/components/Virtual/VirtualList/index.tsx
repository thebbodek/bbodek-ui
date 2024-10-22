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
    const [containerHeight, setContainerHeight] = useState(0);
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

VirtualList.displayName = 'VirtualList';
VirtualList.Item = VirtualListItem;

export default VirtualList;

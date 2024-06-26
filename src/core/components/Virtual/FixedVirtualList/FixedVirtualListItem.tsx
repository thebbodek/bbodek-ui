import React, { ElementType, memo, PropsWithChildren } from 'react';
import clsx from 'clsx';

import { FixedVirtualListItemProps } from '@/core/components/Virtual/FixedVirtualList/types';

const FixedVirtualListItem = <T extends ElementType = 'div'>({
  topPosition,
  className,
  element: Element,
  children,
  height,
}: PropsWithChildren<FixedVirtualListItemProps<T>>) => {
  const Component: React.ElementType = Element || 'div';
  const classNames = clsx(
    'absolute left-0 right-0 top-0 flex items-center will-change-transform',
    className,
  );
  const style = {
    transform: `translateY(${topPosition})`,
    height: `${height}px`,
  };

  return (
    <Component className={classNames} style={style}>
      {children}
    </Component>
  );
};

export default memo(FixedVirtualListItem);

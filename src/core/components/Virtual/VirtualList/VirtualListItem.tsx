import clsx from 'clsx';
import React, { ElementType, memo, PropsWithChildren } from 'react';

import { VirtualListItemProps } from '@/core/components/Virtual/VirtualList/types';

const VirtualListItem = <T extends ElementType = 'div'>({
  topPosition,
  className,
  element: Element,
  children,
  height,
}: PropsWithChildren<VirtualListItemProps<T>>) => {
  const Component: React.ElementType = Element || 'div';
  const classNames = clsx(
    'absolute top-0 right-0 left-0 flex items-center will-change-transform',
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
export default memo(VirtualListItem);

import React, { ElementType, memo, PropsWithChildren } from 'react';
import clsx from 'clsx';

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
export default memo(VirtualListItem);

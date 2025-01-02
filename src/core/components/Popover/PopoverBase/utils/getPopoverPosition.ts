import { CSSProperties } from 'react';

import { GetPopoverPositionProps } from '@/core/components/Popover/PopoverBase/types/PopoverPosition';

export const getPopoverPosition = ({
  trigger,
  current,
  root,
  gap = 0,
}: GetPopoverPositionProps) => {
  const {
    left,
    bottom,
    top,
    width: triggerWidth,
  } = trigger.getBoundingClientRect();
  const style = {
    zIndex: 10000,
    opacity: 1,
    left,
    top: bottom,
    paddingTop: gap,
    minWidth: triggerWidth,
  } as CSSProperties;
  const { width, height } = current.getBoundingClientRect();
  const { bottom: rootBottom, right: rootRight } = root.getBoundingClientRect();
  const isOutsideBottom = bottom + height + gap > rootBottom;
  const isOutsideRight = left + width > rootRight;

  if (isOutsideBottom) {
    style['top'] = top - height - gap;
    style['paddingTop'] = 0;
    style['paddingBottom'] = gap;
  }

  if (isOutsideRight) {
    style['left'] = left - (width - triggerWidth);
  }

  return style;
};

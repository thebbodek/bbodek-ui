import { CSSProperties, useRef, useState } from 'react';

import { useOutSideScrollLockEffect } from '@/core/components/Popover/PopoverBase/hooks/effects/useOutSideScrollLockEffect';
import { useUpdatePopoverPositionEffect } from '@/core/components/Popover/PopoverBase/hooks/effects/useUpdatePopoverPositionEffect';
import { UseUpdatePopoverPositionProps } from '@/core/components/Popover/PopoverBase/types/PopoverPosition';
import useClickOutside from '@/hooks/useClickOutSide';

export const usePopoverPosition = <T extends Element>({
  close,
  useClickOutsideEvent = true,
  ...props
}: UseUpdatePopoverPositionProps) => {
  const { gap, isOpen } = props;
  const triggerRef = useRef<T | null>(null);
  const { contentRef: popoverRef } = useClickOutside<T>((e) => {
    if (!triggerRef.current || triggerRef.current.contains(e.target as Node)) {
      return;
    }

    close();
  }, useClickOutsideEvent && isOpen);
  const [style, setStyle] = useState<CSSProperties>({
    position: 'fixed',
    opacity: 0,
    paddingTop: gap,
  });

  useOutSideScrollLockEffect({ ref: popoverRef, isOpen });
  useUpdatePopoverPositionEffect({
    triggerRef,
    popoverRef,
    setStyle,
    ...props,
  });

  return { style, triggerRef, popoverRef };
};

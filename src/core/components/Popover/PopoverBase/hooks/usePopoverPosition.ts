import { CSSProperties, useRef, useState } from 'react';

import { useUpdatePopoverPositionEffect } from '@/core/components/Popover/PopoverBase/hooks/effects/useUpdatePopoverPositionEffect';
import { UseUpdatePopoverPositionProps } from '@/core/components/Popover/PopoverBase/types/PopoverPosition';
import { useOutSideScrollLockEffect } from '@/core/components/Popover/PopoverBase/hooks/effects/useOutSideScrollLockEffect';
import useClickOutside from '@/hooks/useClickOutSide';

export const usePopoverPosition = ({
  close,
  ...props
}: UseUpdatePopoverPositionProps) => {
  const { gap, isOpen } = props;
  const triggerRef = useRef<HTMLDivElement>(null);
  const { contentRef: popoverRef } = useClickOutside<HTMLDivElement>((e) => {
    if (!triggerRef.current || triggerRef.current.contains(e.target as Node)) {
      return;
    }

    close();
  }, isOpen);
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

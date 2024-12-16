import { useEffect } from 'react';

import { getPopoverPosition } from '@/core/components/Popover/utils/getPopoverPosition';
import { UseUpdatePopoverPositionEffectProps } from '@/core/components/Popover/types/PopoverPosition';

export const useUpdatePopoverPositionEffect = ({
  isOpen,
  rootRef,
  triggerRef,
  popoverRef,
  setStyle,
  gap,
}: UseUpdatePopoverPositionEffectProps) => {
  useEffect(() => {
    const root = rootRef ? rootRef.current : document.body;
    const trigger = triggerRef.current;
    const current = popoverRef.current;

    if (!trigger || !current || !root) return;

    const style = getPopoverPosition({
      trigger,
      current,
      root,
      gap,
    });

    setStyle(style);
  }, [triggerRef, rootRef, popoverRef, isOpen]);
};

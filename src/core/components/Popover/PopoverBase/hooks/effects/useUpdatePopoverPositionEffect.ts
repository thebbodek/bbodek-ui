import { useEffect } from 'react';

import { getPopoverPosition } from '@/core/components/Popover/PopoverBase/utils/getPopoverPosition';
import { UseUpdatePopoverPositionEffectProps } from '@/core/components/Popover/PopoverBase/types/PopoverPosition';

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

    const updatePosition = () => {
      const style = getPopoverPosition({
        trigger,
        current,
        root,
        gap,
      });

      setStyle((prevStyle) => ({ ...prevStyle, ...style }));
    };

    const observer = new ResizeObserver(updatePosition);
    observer.observe(root);
    observer.observe(trigger);

    if (isOpen) {
      updatePosition();
    }

    return () => observer.disconnect();
  }, [triggerRef, rootRef, popoverRef, isOpen]);
};

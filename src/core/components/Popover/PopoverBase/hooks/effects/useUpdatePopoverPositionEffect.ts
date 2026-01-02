import { useEffect } from 'react';

import { UseUpdatePopoverPositionEffectProps } from '@/core/components/Popover/PopoverBase/types/PopoverPosition';
import { getPopoverPosition } from '@/core/components/Popover/PopoverBase/utils/getPopoverPosition';

export const useUpdatePopoverPositionEffect = ({
  isOpen,
  triggerRef,
  popoverRef,
  setStyle,
  gap,
  applyMaxWidth,
}: UseUpdatePopoverPositionEffectProps) => {
  useEffect(() => {
    const trigger = triggerRef.current;
    const current = popoverRef.current;

    if (!trigger || !current) return;

    const root = trigger.closest('.popover-root') || document.body;

    const updatePosition = () => {
      const style = getPopoverPosition({
        trigger,
        current,
        root: root as HTMLElement,
        gap,
        applyMaxWidth,
      });

      setStyle((prevStyle) => ({
        ...prevStyle,
        ...style,
        opacity: isOpen ? 1 : 0,
      }));
    };

    const observer = new ResizeObserver(updatePosition);

    observer.observe(root);
    observer.observe(trigger);
    observer.observe(current);

    if (isOpen) {
      updatePosition();
    }

    return () => observer.disconnect();
  }, [triggerRef, popoverRef, isOpen]);
};

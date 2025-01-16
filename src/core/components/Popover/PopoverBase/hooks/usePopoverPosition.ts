import { CSSProperties, useRef, useState } from 'react';

import { useUpdatePopoverPositionEffect } from '@/core/components/Popover/PopoverBase/hooks/effects/useUpdatePopoverPositionEffect';
import { UseUpdatePopoverPositionProps } from '@/core/components/Popover/PopoverBase/types/PopoverPosition';
import { useOutSideScrollLockEffect } from '@/core/components/Popover/PopoverBase/hooks/effects/useOutSideScrollLockEffect';

export const usePopoverPosition = (props: UseUpdatePopoverPositionProps) => {
  const { gap, isOpen } = props;
  const popoverRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<CSSProperties>({
    position: 'fixed',
    opacity: 0,
    paddingTop: gap,
  });

  useOutSideScrollLockEffect({ ref: popoverRef, isOpen });
  useUpdatePopoverPositionEffect({ popoverRef, setStyle, ...props });

  return { style, popoverRef };
};

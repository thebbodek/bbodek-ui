import { CSSProperties, useRef, useState } from 'react';

import { useUpdatePopoverPositionEffect } from '@/core/components/Popover/hooks/effects/useUpdatePopoverPositionEffect';
import { UseUpdatePopoverPositionProps } from '@/core/components/Popover/types/PopoverPosition';

export const usePopoverPosition = ({
  gap,
  ...rest
}: UseUpdatePopoverPositionProps) => {
  const popoverRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<CSSProperties>({
    position: 'fixed',
    opacity: 0,
    paddingTop: gap,
  });

  useUpdatePopoverPositionEffect({ popoverRef, setStyle, gap, ...rest });

  return { style, popoverRef };
};

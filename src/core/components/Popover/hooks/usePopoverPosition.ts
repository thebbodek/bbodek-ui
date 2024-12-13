import { useRef } from 'react';

import { useUpdatePopoverPositionEffect } from '@/core/components/Popover/hooks/effects/useUpdatePopoverPositionEffect';
import { UseUpdatePopoverPositionProps } from '@/core/components/Popover/types/PopoverPosition';

export const usePopoverPosition = (props: UseUpdatePopoverPositionProps) => {
  const popoverRef = useRef<HTMLDivElement>(null);

  useUpdatePopoverPositionEffect({ popoverRef, ...props });

  return { popoverRef };
};

import { ReactNode } from 'react';

import { PopoverProps } from '@/core/components/Popover/PopoverBase/types';

export interface InfoPopoverProps extends Omit<PopoverProps, 'popover'> {
  heading: string;
  items: { title: ReactNode; description: ReactNode }[];
}

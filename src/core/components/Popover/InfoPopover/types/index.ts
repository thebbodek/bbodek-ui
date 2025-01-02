import { PopoverProps } from '@/core/components/Popover/PopoverBase/types';

export interface InfoPopoverProps extends Omit<PopoverProps, 'popover'> {
  heading: string;
  items: { title: string; description: string }[];
}

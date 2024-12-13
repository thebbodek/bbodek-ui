import { HTMLAttributes, ReactElement, RefObject } from 'react';

import { SectionProps } from '@/core/components/Section/types';
import { UseUpdatePopoverPositionProps } from '@/core/components/Popover/types/PopoverPosition';
import { ModalBaseProps } from '@/core/components/Modal/ModalBase/types';

export interface PopoverProps
  extends Pick<ModalBaseProps, 'useClickOutsideEvent'> {
  trigger: ReactElement;
  popover?: ((props: { close: () => void }) => ReactElement) | ReactElement;
  rootRef?: RefObject<HTMLElement>;
  useHover?: boolean;
  popoverOptions?: Pick<
    SectionProps<'div'>,
    'color' | 'colorTheme' | 'backgroundColor' | 'borderColor' | 'className'
  > &
    Pick<UseUpdatePopoverPositionProps, 'gap'>;
  rootClassName?: HTMLAttributes<HTMLDivElement>['className'];
}

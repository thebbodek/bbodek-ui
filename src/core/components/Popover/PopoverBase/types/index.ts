import { HTMLAttributes, ReactElement, RefObject } from 'react';

import { SectionProps } from '@/core/components/Section/types';
import { UseUpdatePopoverPositionProps } from '@/core/components/Popover/PopoverBase/types/PopoverPosition';
import { ModalBaseProps } from '@/core/components/Modal/ModalBase/types';

export interface PopoverProps
  extends Pick<ModalBaseProps, 'useClickOutsideEvent'> {
  trigger: ReactElement;
  popover?: ((props: { close: () => void }) => ReactElement) | ReactElement;
  useHover?: boolean;
  popoverOptions?: Pick<
    SectionProps<'div'>,
    | 'color'
    | 'colorTheme'
    | 'backgroundColor'
    | 'borderColor'
    | 'className'
    | 'hasBorder'
    | 'hasShadow'
  > &
    Pick<UseUpdatePopoverPositionProps, 'gap'>;
  rootClassName?: HTMLAttributes<HTMLDivElement>['className'];
}

export interface UseScrollLockOutSideEffectProps {
  isOpen: boolean;
  ref: RefObject<Element>;
}

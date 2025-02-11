import { HTMLAttributes, ReactElement, RefObject } from 'react';

import { SectionProps } from '@/core/components/Section/types';
import { UseUpdatePopoverPositionProps } from '@/core/components/Popover/PopoverBase/types/PopoverPosition';

export interface PopoverChildrenProps {
  close: () => void;
}

export interface PopoverProps
  extends Pick<HTMLAttributes<HTMLDivElement>, 'onClick'>,
    Pick<UseUpdatePopoverPositionProps, 'applyMaxWidth'> {
  trigger: ReactElement;
  popover: ((props: PopoverChildrenProps) => ReactElement) | ReactElement;
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
    | 'shadow'
  > &
    Pick<UseUpdatePopoverPositionProps, 'gap'>;
  rootClassName?: HTMLAttributes<HTMLDivElement>['className'];
}

export interface UseScrollLockOutSideEffectProps {
  isOpen: boolean;
  ref: RefObject<Element>;
}

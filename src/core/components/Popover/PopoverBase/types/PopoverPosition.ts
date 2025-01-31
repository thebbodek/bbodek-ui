import { CSSProperties, Dispatch, RefObject, SetStateAction } from 'react';
import { ModalBaseProps } from '@/core/components/Modal/ModalBase/types';
import { PopoverChildrenProps } from '@/core/components/Popover/PopoverBase/types/index';

export interface GetPopoverPositionProps {
  root: HTMLElement;
  trigger: HTMLElement;
  current: HTMLElement;
  applyMaxWidth?: boolean;
  gap?: number;
}

export interface UseUpdatePopoverPositionProps
  extends Pick<GetPopoverPositionProps, 'applyMaxWidth' | 'gap'>,
    Pick<ModalBaseProps, 'useClickOutsideEvent'>,
    PopoverChildrenProps {
  isOpen: boolean;
}

export interface UseUpdatePopoverPositionEffectProps
  extends Omit<UseUpdatePopoverPositionProps, 'close'> {
  popoverRef: RefObject<HTMLDivElement>;
  triggerRef: RefObject<HTMLDivElement>;
  setStyle: Dispatch<SetStateAction<CSSProperties>>;
}

import { CSSProperties, Dispatch, RefObject, SetStateAction } from 'react';
import { ModalBaseProps } from '@/core/components/Modal/ModalBase/types';
import { PopoverChildrenProps } from '@/core/components/Popover/PopoverBase/types/index';

export interface GetPopoverPositionProps {
  root: Element;
  trigger: Element;
  current: Element;
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
  popoverRef: RefObject<Element | null>;
  triggerRef: RefObject<Element | null>;
  setStyle: Dispatch<SetStateAction<CSSProperties>>;
}

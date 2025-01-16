import { CSSProperties, Dispatch, RefObject, SetStateAction } from 'react';

export interface UseUpdatePopoverPositionProps {
  isOpen: boolean;
  triggerRef: RefObject<HTMLElement>;
  gap?: number;
}

export interface GetPopoverPositionProps
  extends Pick<UseUpdatePopoverPositionProps, 'gap'> {
  root: HTMLElement;
  trigger: HTMLElement;
  current: HTMLElement;
}

export interface UseUpdatePopoverPositionEffectProps
  extends UseUpdatePopoverPositionProps {
  popoverRef: RefObject<HTMLDivElement>;
  setStyle: Dispatch<SetStateAction<CSSProperties>>;
}

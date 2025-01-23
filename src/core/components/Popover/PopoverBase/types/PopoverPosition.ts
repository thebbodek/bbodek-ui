import { CSSProperties, Dispatch, RefObject, SetStateAction } from 'react';

export interface UseUpdatePopoverPositionProps
  extends Pick<GetPopoverPositionProps, 'applyMaxWidth'> {
  isOpen: boolean;
  triggerRef: RefObject<HTMLElement>;
  gap?: number;
}

export interface GetPopoverPositionProps
  extends Pick<UseUpdatePopoverPositionProps, 'gap'> {
  root: HTMLElement;
  trigger: HTMLElement;
  current: HTMLElement;
  applyMaxWidth?: boolean;
}

export interface UseUpdatePopoverPositionEffectProps
  extends UseUpdatePopoverPositionProps {
  popoverRef: RefObject<HTMLDivElement>;
  setStyle: Dispatch<SetStateAction<CSSProperties>>;
}

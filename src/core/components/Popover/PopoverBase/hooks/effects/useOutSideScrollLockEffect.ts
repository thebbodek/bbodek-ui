import { useEffect } from 'react';

import { UseScrollLockOutSideEffectProps } from '@/core/components/Popover/PopoverBase/types';

export const useOutSideScrollLockEffect = ({
  isOpen,
  ref,
}: UseScrollLockOutSideEffectProps) => {
  const handleScrollLock = (e: Event) => {
    if (!ref.current) return;

    if (ref.current.contains(e.target as Node)) return;

    e.preventDefault();
    e.stopPropagation();

    return false;
  };

  const handleOnScrollEvent = (el: HTMLElement) => {
    el.addEventListener('scroll', handleScrollLock);
    el.addEventListener('wheel', handleScrollLock);
    el.addEventListener('touchmove', handleScrollLock);
  };

  const handleOffScrollEvent = (el: HTMLElement) => {
    el.removeEventListener('scroll', handleScrollLock);
    el.removeEventListener('wheel', handleScrollLock);
    el.removeEventListener('touchmove', handleScrollLock);
  };

  useEffect(() => {
    const current = ref.current;

    if (!current) return;

    const root = current.closest('.popover-root') || document.body;
    const overflows =
      '.overflow-y-auto, .overflow-auto, .overflow-x-auto, .overflow-scroll, .overflow-x-scroll, .overflow-y-scroll';
    const overflowItems = [root, ...root.querySelectorAll(overflows)];

    if (!overflowItems.length) return;

    overflowItems.forEach((item) => {
      const el = item as HTMLElement;
      isOpen ? handleOnScrollEvent(el) : handleOffScrollEvent(el);
    });

    return () =>
      overflowItems.forEach((el) => handleOffScrollEvent(el as HTMLElement));
  }, [isOpen, ref]);
};

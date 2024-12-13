import { useEffect } from 'react';

import { PopoverProps } from '@/core/components/Popover/types';

export const useRootScrollLockEffect = ({
  isOpen,
  rootRef,
}: Pick<PopoverProps, 'rootRef'> & { isOpen: boolean }) => {
  const handleScrollOn = (root: HTMLElement) => {
    root.style.overflow = 'hidden';
  };

  const handleScrollLock = (root: HTMLElement) => {
    root.style.overflow = '';
  };

  useEffect(() => {
    const root = rootRef ? rootRef.current : document.body;

    if (!root) return;

    isOpen ? handleScrollOn(root) : handleScrollLock(root);

    return () => handleScrollLock(root);
  }, [rootRef, isOpen]);
};

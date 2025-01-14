import { MouseEvent, useState } from 'react';

import { PopoverProps } from '@/core/components/Popover/PopoverBase/types';
import { useRootScrollLockEffect } from '@/core/components/Popover/PopoverBase/hooks/effects/useRootScrollLockEffect';
import { usePopoverPosition } from '@/core/components/Popover/PopoverBase/hooks/usePopoverPosition';
import useClickOutside from '@/hooks/useClickOutSide';
import Section from '@/core/components/Section';

const Popover = ({
  rootRef,
  trigger,
  popover,
  popoverOptions,
  useHover = false,
  useClickOutsideEvent = true,
  rootClassName,
}: PopoverProps) => {
  const isFunction = typeof popover === 'function';
  const {
    gap = 4,
    hasShadow = true,
    backgroundColor = 'white',
    ...props
  } = popoverOptions ?? {};
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);
  const { contentRef: triggerRef } = useClickOutside<HTMLDivElement>(
    close,
    useClickOutsideEvent,
  );
  const { popoverRef, style } = usePopoverPosition({
    isOpen,
    triggerRef,
    rootRef,
    gap,
  });

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();

    setIsOpen((v) => (v ? popoverRef.current!.contains(e.target as Node) : !v));
  };

  useRootScrollLockEffect({ isOpen, rootRef });

  return (
    <div
      ref={triggerRef}
      onClick={handleClick}
      onMouseEnter={() => useHover && setIsOpen(true)}
      onMouseLeave={() => useHover && setIsOpen(false)}
      className={rootClassName}
    >
      {trigger}
      {isOpen && popover && (
        <div style={style}>
          <Section
            backgroundColor={backgroundColor}
            hasShadow={hasShadow}
            {...props}
            ref={popoverRef}
            element={'div'}
          >
            {isFunction ? popover({ close }) : popover}
          </Section>
        </div>
      )}
    </div>
  );
};

export default Popover;

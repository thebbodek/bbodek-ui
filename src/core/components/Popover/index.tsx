import { cloneElement, MouseEvent, useState } from 'react';

import { PopoverProps } from '@/core/components/Popover/types';
import { useRootScrollLockEffect } from '@/core/components/Popover/hooks/effects/useRootScrollLockEffect';
import { usePopoverPosition } from '@/core/components/Popover/hooks/usePopoverPosition';
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
  const { gap = 4, ...props } = popoverOptions ?? {};
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
    onToggle();
  };

  const onToggle = () => setIsOpen((v) => !v);

  useRootScrollLockEffect({ isOpen, rootRef });

  return (
    <div
      ref={triggerRef}
      onClick={!isFunction ? handleClick : undefined}
      onMouseEnter={() => useHover && setIsOpen(true)}
      onMouseLeave={() => useHover && setIsOpen(false)}
      className={rootClassName}
    >
      {cloneElement(trigger, { onClick: isFunction ? handleClick : undefined })}
      {isOpen && popover && (
        <div style={style}>
          <Section ref={popoverRef} element={'div'} {...props}>
            {isFunction ? popover({ close }) : popover}
          </Section>
        </div>
      )}
    </div>
  );
};

export default Popover;

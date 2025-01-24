import { MouseEvent, useState } from 'react';

import { PopoverProps } from '@/core/components/Popover/PopoverBase/types';
import { usePopoverPosition } from '@/core/components/Popover/PopoverBase/hooks/usePopoverPosition';
import useClickOutside from '@/hooks/useClickOutSide';
import Section from '@/core/components/Section';
import Portal from '@/core/components/Portal';

const Popover = ({
  trigger,
  popover,
  popoverOptions,
  useHover = false,
  useClickOutsideEvent = true,
  rootClassName,
  applyMaxWidth = false,
  onClick,
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
    gap,
    applyMaxWidth,
  });

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    onClick?.(e);

    if (useHover) return;

    setIsOpen((v) =>
      popover && v ? popoverRef.current!.contains(e.target as Node) : !v,
    );
  };

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
        <Portal>
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
        </Portal>
      )}
    </div>
  );
};

export default Popover;

import { MouseEvent, RefObject, useState } from 'react';

import { SHADOW } from '@/core/components/Section/constants';
import { PopoverProps } from '@/core/components/Popover/PopoverBase/types';
import { usePopoverPosition } from '@/core/components/Popover/PopoverBase/hooks/usePopoverPosition';
import Section from '@/core/components/Section';
import Portal from '@/core/components/Portal';

const Popover = ({
  trigger,
  popover,
  popoverOptions,
  useHover = false,
  rootClassName,
  applyMaxWidth = false,
  onClick,
}: PopoverProps) => {
  const isFunction = typeof popover === 'function';
  const {
    gap = 4,
    hasShadow = true,
    backgroundColor = 'white',
    shadow = SHADOW['SHADOW_MD'],
    ...props
  } = popoverOptions ?? {};
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);
  const { triggerRef, popoverRef, style } = usePopoverPosition<HTMLDivElement>({
    isOpen,
    gap,
    applyMaxWidth,
    close,
    useClickOutsideEvent: !useHover,
  });

  const handleTriggerClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();

    onClick?.(e);

    if (useHover) return;

    setIsOpen((v) =>
      isFunction && v ? popoverRef.current!.contains(e.target as Node) : !v,
    );
  };

  return (
    <div
      ref={triggerRef}
      onClick={handleTriggerClick}
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
              shadow={shadow}
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

import React, { createContext, useState } from 'react';

import useClickOutside from '@/hooks/useClickOutSide';
import Typography from '../../Typography';
import DropdownItem from './DropdownItem';
import DropdownItems from './DropdownItems';
import DropdownTrigger from './DropdownTrigger';
import FormLabel from '@/core/components/FormLabel';
import { DropdownContextValue, DropdownProps, ReturnType } from './types';
import { usePopoverPosition } from '@/core/components/Popover/PopoverBase/hooks/usePopoverPosition';

export const DropdownContext = createContext<DropdownContextValue | undefined>(
  undefined,
);
DropdownContext.displayName = 'DropdownContext';

const DropdownBase = ({
  label,
  className,
  readOnly = false,
  disabled = false,
  trigger,
  badge,
  content,
  feedback,
  feedbackColor = 'error',
  labelColor,
  required,
  sub,
  useClickOutsideEvent = true,
}: DropdownProps) => {
  const [isToggle, setIsToggle] = useState(false);
  const { contentRef } = useClickOutside<HTMLDivElement>(
    () => setIsToggle(false),
    useClickOutsideEvent,
  );
  const isVisibleContent = !readOnly && !disabled && isToggle;
  const hasInputLabel = badge || label || sub;
  const { popoverRef, style } = usePopoverPosition({
    isOpen: isToggle,
    triggerRef: contentRef,
    gap: 4,
  });

  const labelRenderer = () => {
    if (badge && label) {
      return (
        <div className={'mb-1.5 flex items-center gap-x-0.5'}>
          <div className={'flex-shrink-0'}>{badge}</div>
          <div className='flex flex-1 items-center justify-between'>
            {label && (
              <label>
                <FormLabel
                  label={label}
                  labelColor={labelColor}
                  required={required}
                />
              </label>
            )}
            {sub && sub}
          </div>
        </div>
      );
    }

    return (
      <div className='mb-1.5 flex items-center justify-between'>
        {label && (
          <label>
            <FormLabel
              label={label}
              labelColor={labelColor}
              required={required}
            />
          </label>
        )}
        {sub && sub}
      </div>
    );
  };

  return (
    <DropdownContext.Provider
      value={{ isToggle, setIsToggle, readOnly, disabled }}
    >
      <div ref={contentRef} className={className}>
        {hasInputLabel && labelRenderer()}
        {trigger}
        {isVisibleContent && (
          <div ref={popoverRef} style={style}>
            {content}
          </div>
        )}
        {feedback ? (
          <Typography
            theme='body-03-regular'
            color={feedbackColor}
            text={feedback}
          />
        ) : null}
      </div>
    </DropdownContext.Provider>
  );
};

export default DropdownBase as unknown as ReturnType;

DropdownBase.displayName = 'DropdownBase';
DropdownBase.Trigger = DropdownTrigger;
DropdownBase.Items = DropdownItems;
DropdownBase.Item = DropdownItem;

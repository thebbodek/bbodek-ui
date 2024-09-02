import clsx from 'clsx';
import React, { createContext, useState } from 'react';

import useClickOutside from '@/hooks/useClickOutSide';
import Typography from '../../Typography';
import DropdownItem from './DropdownItem';
import DropdownItems from './DropdownItems';
import DropdownTrigger from './DropdownTrigger';
import FormLabel from '@/core/components/FormLabel';
import { DropdownContextValue, DropdownProps, ReturnType } from './types';

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
  content,
  feedback,
  feedbackColor = 'error',
  labelColor,
  required,
  sub,
}: DropdownProps) => {
  const [isToggle, setIsToggle] = useState(false);
  const { contentRef } = useClickOutside<HTMLDivElement>(() =>
    setIsToggle(false),
  );
  const isVisibleContent = !readOnly && !disabled && isToggle;
  const hasInputLabel = label || sub;

  return (
    <DropdownContext.Provider
      value={{ isToggle, setIsToggle, readOnly, disabled }}
    >
      <div ref={contentRef} className={clsx(className, 'relative')}>
        {hasInputLabel && (
          <div className='mb-2 flex items-center justify-between'>
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
        )}
        {trigger}
        {isVisibleContent && content}
      </div>
      {feedback ? (
        <Typography
          theme='body-03-regular'
          color={feedbackColor}
          text={feedback}
        />
      ) : null}
    </DropdownContext.Provider>
  );
};

export default DropdownBase as unknown as ReturnType;

DropdownBase.displayName = 'DropdownBase';
DropdownBase.Trigger = DropdownTrigger;
DropdownBase.Items = DropdownItems;
DropdownBase.Item = DropdownItem;

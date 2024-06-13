import useClickOutside from '@/hooks/useClickOutSide';
import clsx from 'clsx';
import { createContext, useState } from 'react';

import Typography from '../../Typography';
import DropdownItem from './DropdownItem';
import DropdownItems from './DropdownItems';
import DropdownTrigger from './DropdownTrigger';
import { DropdownContextValue, DropdownProps, ReturnType } from './types';

export const DropdownContext = createContext<DropdownContextValue | undefined>(
  undefined,
);
DropdownContext.displayName = 'DropdownContext';

const DropdownBase = ({
  className,
  readOnly = false,
  disabled = false,
  trigger,
  content,
  feedback,
  feedbackColor = 'error',
}: DropdownProps) => {
  const [isToggle, setIsToggle] = useState(false);
  const { contentRef } = useClickOutside<HTMLDivElement>(() =>
    setIsToggle(false),
  );
  const isVisibleContent = !readOnly && !disabled && isToggle;

  return (
    <DropdownContext.Provider
      value={{ isToggle, setIsToggle, readOnly, disabled }}
    >
      <div ref={contentRef} className={clsx(className, 'relative')}>
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

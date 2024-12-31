import {
  arrow,
  FloatingArrow,
  offset,
  useFloating,
  useHover,
  useInteractions,
} from '@floating-ui/react';
import { useRef, useState } from 'react';
import clsx from 'clsx';

import {
  BUTTON_ROUNDED,
  ROUNDED,
} from '@/core/components/Button/ButtonBase/constants';
import { COLOR_THEME_STYLES } from '@/constants/theme';
import {
  ARROW_HEIGHT,
  FILL_COLOR_THEME_STYLES,
} from '@/core/components/Tooltip/constants';
import { TooltipProps } from '@/core/components/Tooltip/types';

const Tooltip = ({
  content,
  children,
  placement,
  className,
  rootClassName,
  hasArrow = true,
  hidden = false,
  rounded = ROUNDED['ROUNDED_6'],
  theme = 'body-02-regular',
  colorTheme = 'dark',
  gap = 5,
}: TooltipProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const arrowRef = useRef(null);

  const {
    refs: { setFloating, setReference },
    floatingStyles,
    context,
  } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement,
    middleware: [
      arrow({
        element: arrowRef,
      }),
      offset(hasArrow ? gap + ARROW_HEIGHT : gap),
    ],
  });

  const hover = useHover(context);
  const { getReferenceProps, getFloatingProps } = useInteractions([hover]);

  return (
    <>
      <div
        ref={setReference}
        {...getReferenceProps()}
        className={rootClassName}
      >
        {children}
      </div>
      {isOpen && !hidden && (
        <div
          ref={setFloating}
          style={floatingStyles}
          {...getFloatingProps()}
          className={clsx(
            `relative z-50 break-keep rounded-md px-2 py-1 text-${theme}`,
            BUTTON_ROUNDED[rounded],
            COLOR_THEME_STYLES[colorTheme],
            className,
          )}
        >
          {content}
          {hasArrow && (
            <FloatingArrow
              ref={arrowRef}
              context={context}
              width={12}
              height={ARROW_HEIGHT}
              tipRadius={2}
              className={clsx(FILL_COLOR_THEME_STYLES[colorTheme])}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Tooltip;

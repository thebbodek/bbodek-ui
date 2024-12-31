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
import {
  ARROW_HEIGHT,
  FILL_COLOR_THEME_STYLES,
} from '@/core/components/Tooltip/constants';
import { COLOR_THEME, COLOR_THEME_STYLES } from '@/constants/theme';
import { THEME_TYPOGRAPHY } from '@/constants/typography';
import { TooltipProps } from '@/core/components/Tooltip/types';
import { ThemeTypography } from '@/types';
import { useUpdateIsOpenEffect } from '@/core/components/Tooltip/hooks/effects/useUpdateIsOpenEffect';

const Tooltip = ({
  content,
  children,
  placement,
  rootClassName,
  className,
  rounded = ROUNDED['ROUNDED_6'],
  theme = THEME_TYPOGRAPHY['BODY_02_REGULAR'] as ThemeTypography,
  colorTheme = COLOR_THEME['DARK'],
  gap = 5,
  hasArrow = true,
  hidden = false,
  isKeepFloating = false,
}: TooltipProps) => {
  const [isOpen, setIsOpen] = useState(!hidden && isKeepFloating);
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

  const hover = useHover(context, { enabled: !hidden && !isKeepFloating });
  const { getReferenceProps, getFloatingProps } = useInteractions([hover]);

  useUpdateIsOpenEffect({ hidden, isKeepFloating, setIsOpen });

  return (
    <>
      <div
        ref={setReference}
        {...getReferenceProps()}
        className={rootClassName}
      >
        {children}
      </div>
      {isOpen && (
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

import {
  arrow,
  autoUpdate,
  flip,
  FloatingArrow,
  FloatingPortal,
  offset,
  safePolygon,
  shift,
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
  hasArrow = false,
  hidden = false,
  isKeepFloating = false,
}: TooltipProps) => {
  const [isOpen, setIsOpen] = useState(!hidden && isKeepFloating);
  const arrowRef = useRef(null);

  const onOpenChange = (open: boolean) => {
    if (!isKeepFloating && !hidden) {
      setIsOpen(open);
    }
  };

  const {
    refs: { setFloating, setReference },
    floatingStyles,
    context,
  } = useFloating({
    open: isOpen,
    onOpenChange,
    placement,
    whileElementsMounted: autoUpdate,
    middleware: [
      arrow({ element: arrowRef }),
      offset(hasArrow ? gap + ARROW_HEIGHT : gap),
      flip(),
      shift(),
    ],
  });

  const hover = useHover(context, {
    enabled: !hidden && !isKeepFloating,
    handleClose: safePolygon({ blockPointerEvents: true }),
  });
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
        <FloatingPortal>
          <div
            ref={setFloating}
            style={floatingStyles}
            {...getFloatingProps()}
            className={clsx(
              `break-keep rounded-[0.375rem] px-2.5 py-1 text-${theme} z-[10000] animate-[fade-in_.1s_ease-in-out_1]`,
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
                width={ARROW_HEIGHT + 6}
                height={ARROW_HEIGHT}
                tipRadius={2}
                className={clsx(FILL_COLOR_THEME_STYLES[colorTheme])}
              />
            )}
          </div>
        </FloatingPortal>
      )}
    </>
  );
};

export default Tooltip;

import { cloneElement } from 'react';
import clsx from 'clsx';

import { getPortalPosition } from '@/utilities/getPortalPosition';
import { AvatarPortalProps } from '@/core/components/Avatar/AvatarPopoverPortal/types';
import Portal from '@/core/components/Portal';

const AvatarPopoverPortal = ({ targetRef, popover }: AvatarPortalProps) => {
  const positionStyle = getPortalPosition({ targetRef });

  return (
    <Portal>
      {popover
        ? cloneElement(popover, {
            style: positionStyle,
            className: clsx('fixed', popover.props.className),
          })
        : null}
    </Portal>
  );
};

export default AvatarPopoverPortal;

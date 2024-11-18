import { RefObject } from 'react';

import { AvatarProps } from '@/core/components/Avatar/types';

export interface AvatarPortalProps extends Pick<AvatarProps, 'popover'> {
  targetRef: RefObject<HTMLElement>;
}

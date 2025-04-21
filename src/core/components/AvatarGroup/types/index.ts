import { HTMLAttributes, PropsWithChildren, ReactElement } from 'react';

import { AvatarProps } from '@/core/components/Avatar/types';
import { SizeType } from '@/core/components/Label/types';

export interface AvatarGroupProps
  extends HTMLAttributes<HTMLDivElement>,
    Pick<AvatarProps, 'popoverOptions' | 'useHover'> {
  items: ReactElement<AvatarProps>[];
  max?: number;
  total?: number;
  spacing?: SizeType;
  overflowPopover?:
    | (({
        overflowItems,
      }: {
        overflowItems: PropsWithChildren<AvatarProps>[];
      }) => ReactElement)
    | ReactElement;
}

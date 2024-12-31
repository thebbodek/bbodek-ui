import { HTMLAttributes, PropsWithChildren, ReactElement } from 'react';

import { SizeType } from '@/core/components/Label/types';
import { AvatarProps } from '@/core/components/Avatar/types';

export interface AvatarGroupProps
  extends HTMLAttributes<HTMLDivElement>,
    Pick<AvatarProps, 'popoverOptions' | 'rootRef' | 'useHover'> {
  items: ReactElement[];
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

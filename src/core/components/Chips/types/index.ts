import { HTMLAttributes, RefObject } from 'react';
import { ChipProps } from '@/core/components/Chip/types';

export interface ChipsParams
  extends Pick<HTMLAttributes<HTMLUListElement>, 'className'>,
    Pick<
      ChipProps<'li'>,
      | 'size'
      | 'colorTheme'
      | 'rounded'
      | 'theme'
      | 'color'
      | 'backgroundColor'
      | 'borderColor'
    > {
  rootRef: RefObject<HTMLUListElement>;
  items: ({ id: string } & Pick<ChipProps<'li'>, 'label' | 'icon'>)[];
  onDelete?: (item: { id: string }) => void;
}

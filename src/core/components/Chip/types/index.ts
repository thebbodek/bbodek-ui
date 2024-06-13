import { ElementType } from 'react';

import { LabelProps } from '@/core/components/Label/types';

export interface ChipProps<T extends ElementType> extends LabelProps<T> {
  onDelete?: () => void;
}

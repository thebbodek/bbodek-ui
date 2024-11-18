import { HTMLAttributes, ReactElement } from 'react';

import { SizeType } from '@/core/components/Label/types';
import { RoundedType } from '@/core/components/Button/ButtonBase/types';
import { ColorThemeType } from '@/types';

export interface AvatarProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'content'> {
  src?: string;
  alt?: string;
  size?: SizeType;
  rounded?: RoundedType;
  colorTheme?: ColorThemeType;
  popover?: ReactElement;
  showAllLetter?: boolean;
  hasBorder?: boolean;
  disabled?: boolean;
}

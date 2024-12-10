import { HTMLAttributes, ReactElement } from 'react';

import { AVATAR_SIZE_VARIANTS } from '@/core/components/Avatar/constants';
import { RoundedType } from '@/core/components/Button/ButtonBase/types';
import { ColorThemeType } from '@/types';

export type AvatarSizeVariants =
  (typeof AVATAR_SIZE_VARIANTS)[keyof typeof AVATAR_SIZE_VARIANTS];

export interface AvatarProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'content'> {
  src?: string;
  alt?: string;
  size?: AvatarSizeVariants;
  rounded?: RoundedType;
  colorTheme?: ColorThemeType;
  popover?: ReactElement;
  showAllLetter?: boolean;
  useRandomColorTheme?: boolean;
  disabled?: boolean;
}

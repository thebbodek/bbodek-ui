import { HTMLAttributes } from 'react';

import { AVATAR_SIZE_VARIANTS } from '@/core/components/Avatar/constants';
import { RoundedType } from '@/core/components/Button/ButtonBase/types';
import { ColorThemeType } from '@/types';
import { PopoverProps } from '@/core/components/Popover/types';

export type AvatarSizeVariants =
  (typeof AVATAR_SIZE_VARIANTS)[keyof typeof AVATAR_SIZE_VARIANTS];

export interface AvatarProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'content'>,
    Partial<Omit<PopoverProps, 'trigger'>> {
  src?: string;
  alt?: string;
  size?: AvatarSizeVariants;
  rounded?: RoundedType;
  colorTheme?: ColorThemeType;
  showAllLetter?: boolean;
  useRandomColorTheme?: boolean;
  disabled?: boolean;
}

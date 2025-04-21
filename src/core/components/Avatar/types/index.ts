import { Dispatch, HTMLAttributes, SetStateAction } from 'react';

import { AVATAR_SIZE_VARIANTS } from '@/core/components/Avatar/constants';
import { RoundedType } from '@/core/components/Button/ButtonBase/types';
import { PopoverProps } from '@/core/components/Popover/PopoverBase/types';
import { ColorThemeType } from '@/types';

export type AvatarSizeVariants =
  (typeof AVATAR_SIZE_VARIANTS)[keyof typeof AVATAR_SIZE_VARIANTS];

export interface AvatarProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'content' | 'popover'>,
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

export interface AvatarTriggerProps
  extends Omit<AvatarProps, 'popover' | 'popoverOptions' | 'useHover'> {
  hasImageError: boolean;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setHasImageError: Dispatch<SetStateAction<boolean>>;
}

export interface AvatarContentProps
  extends Pick<
      AvatarTriggerProps,
      | 'alt'
      | 'src'
      | 'hasImageError'
      | 'setHasImageError'
      | 'setIsLoading'
      | 'isLoading'
    >,
    Required<Pick<AvatarTriggerProps, 'size' | 'rounded' | 'showAllLetter'>> {}

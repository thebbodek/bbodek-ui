import {
  getFixedColorThemeByLetter,
  getRandomColorTheme,
} from '@/utilities/colorTheme';
import { AvatarProps } from '@/core/components/Avatar/types';

const getAvatarColorTheme = ({
  colorTheme,
  alt,
  useRandomColorTheme,
}: Pick<AvatarProps, 'colorTheme' | 'alt' | 'useRandomColorTheme'>) => {
  if (colorTheme) return colorTheme;

  if (alt && !useRandomColorTheme) {
    return getFixedColorThemeByLetter({ str: alt });
  }

  return getRandomColorTheme();
};

export default getAvatarColorTheme;

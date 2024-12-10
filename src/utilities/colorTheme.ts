import {
  COLOR_THEME_VARIANT,
  COLOR_THEME_VARIANT_OPTIONS,
} from '@/constants/theme';
import { ColorThemeVariant } from '@/types';
import { getLetterCode } from '@/utilities/letter';

export const getColorTheme = ({
  variant = COLOR_THEME_VARIANT['LIGHT'],
  themeNumberCallback,
}: {
  variant?: ColorThemeVariant;
  themeNumberCallback: (props: { length: number }) => number;
}) => {
  const colorThemes = Object.values(COLOR_THEME_VARIANT_OPTIONS[variant]);
  const num = themeNumberCallback({ length: colorThemes.length });

  return colorThemes[num];
};

export const getRandomColorTheme = (props?: { variant?: ColorThemeVariant }) =>
  getColorTheme({
    variant: props?.variant,
    themeNumberCallback: ({ length }) => Math.floor(Math.random() * length),
  });

export const getFixedColorThemeByLetter = ({
  str,
  variant,
}: {
  str: string;
  variant?: ColorThemeVariant;
}) =>
  getColorTheme({
    variant,
    themeNumberCallback: ({ length }) => getLetterCode(str) % length,
  });

import clsx from 'clsx';
import { MouseEvent, PropsWithChildren } from 'react';

import { COLOR_THEME_STYLES } from '@/constants/theme';
import AvatarContent from '@/core/components/Avatar/AvatarContent';
import {
  AVATAR_SIZE,
  AVATAR_SIZE_VARIANTS,
} from '@/core/components/Avatar/constants';
import { AvatarTriggerProps } from '@/core/components/Avatar/types';
import getAvatarColorTheme from '@/core/components/Avatar/utils/getAvatarColorTheme';
import {
  BUTTON_ROUNDED,
  ROUNDED,
} from '@/core/components/Button/ButtonBase/constants';

const AvatarTrigger = ({
  src,
  alt,
  size = AVATAR_SIZE_VARIANTS['MEDIUM'],
  rounded = ROUNDED['ROUNDED_FULL'],
  colorTheme,
  className,
  disabled = false,
  onClick,
  showAllLetter = false,
  useRandomColorTheme = false,
  isLoading,
  setIsLoading,
  hasImageError,
  setHasImageError,
  children,
  ...props
}: PropsWithChildren<AvatarTriggerProps>) => {
  const avatarColorTheme = getAvatarColorTheme({
    colorTheme,
    alt,
    useRandomColorTheme,
  });
  const useImage = !hasImageError && src;

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    if (disabled) return;

    onClick?.(e);
  };

  return (
    <div
      className={clsx(
        'relative flex items-center overflow-hidden uppercase hover:z-[1]',
        disabled && 'cursor-not-allowed opacity-30',
        onClick && !disabled && 'cursor-pointer',
        className,
        AVATAR_SIZE[size],
        BUTTON_ROUNDED[rounded],
        (!isLoading || !useImage) &&
          `justify-center ${COLOR_THEME_STYLES[avatarColorTheme]}`,
      )}
      onClick={handleClick}
      {...props}
    >
      <AvatarContent
        alt={alt}
        src={src}
        size={size}
        rounded={rounded}
        showAllLetter={showAllLetter}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        hasImageError={hasImageError}
        setHasImageError={setHasImageError}
      >
        {children}
      </AvatarContent>
    </div>
  );
};

export default AvatarTrigger;

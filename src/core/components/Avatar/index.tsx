import { MouseEvent, PropsWithChildren, useState } from 'react';
import clsx from 'clsx';
import 'react-loading-skeleton/dist/skeleton.css';

import {
  BUTTON_ROUNDED,
  ROUNDED,
} from '@/core/components/Button/ButtonBase/constants';
import { COLOR_THEME_STYLES } from '@/constants/theme';
import {
  AVATAR_SIZE,
  AVATAR_SIZE_VARIANTS,
} from '@/core/components/Avatar/constants';
import { AvatarProps } from '@/core/components/Avatar/types';
import useInitEffect from '@/hooks/effects/useInitEffect';
import getAvatarColorTheme from '@/core/components/Avatar/utils/getAvatarColorTheme';
import Popover from '@/core/components/Popover/PopoverBase';
import AvatarContent from '@/core/components/Avatar/AvatarContent';
import AvatarSkeleton from '@/core/components/Avatar/AvatarSkeleton';

const Avatar = ({
  src,
  alt,
  children,
  popover,
  popoverOptions,
  useHover = true,
  size = AVATAR_SIZE_VARIANTS['MEDIUM'],
  rounded = ROUNDED['ROUNDED_FULL'],
  colorTheme,
  className,
  disabled = false,
  onClick,
  showAllLetter = false,
  useRandomColorTheme = false,
  ...props
}: PropsWithChildren<AvatarProps>) => {
  const [isReady, setIsReady] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasImageError, setHasImageError] = useState(false);
  const useImage = !hasImageError && src;
  const avatarColorTheme = getAvatarColorTheme({
    colorTheme,
    alt,
    useRandomColorTheme,
  });

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    if (disabled) return;

    onClick?.(e);
  };

  useInitEffect(() => setIsReady(true));

  if (!isReady) return <AvatarSkeleton size={size} rounded={rounded} />;

  return (
    <Popover
      trigger={
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
      }
      popover={popover}
      popoverOptions={popoverOptions}
      useHover={useHover}
    />
  );
};

export default Avatar;

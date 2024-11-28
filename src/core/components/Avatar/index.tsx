import {
  MouseEvent,
  PropsWithChildren,
  useMemo,
  useRef,
  useState,
} from 'react';
import clsx from 'clsx';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import {
  BUTTON_ROUNDED,
  ROUNDED,
} from '@/core/components/Button/ButtonBase/constants';
import { AvatarProps } from '@/core/components/Avatar/types';
import {
  AVATAR_IMAGE_SIZE,
  AVATAR_SIZE,
  AVATAR_SIZE_VARIANTS,
} from '@/core/components/Avatar/constants';
import { COLOR_THEME_STYLES } from '@/constants/theme';
import { getFirstLetter } from '@/core/components/Avatar/utils/getFirstLetter';
import { getColorTheme } from '@/utilities/getColorTheme';
import Icon from '@/core/components/Icon';
import AvatarPopoverPortal from '@/core/components/Avatar/AvatarPopoverPortal';

const Avatar = ({
  src,
  alt,
  children,
  size = AVATAR_SIZE_VARIANTS['MEDIUM'],
  rounded = ROUNDED['ROUNDED_FULL'],
  colorTheme,
  className,
  disabled = false,
  popover,
  onClick,
  showAllLetter = false,
  ...props
}: PropsWithChildren<AvatarProps>) => {
  const avatarRef = useRef<HTMLDivElement>(null);
  const [hasImageError, setHasImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const _colorTheme = useMemo(
    () => getColorTheme({ colorTheme, variant: 'light' }),
    [colorTheme],
  );

  const renderer = () => {
    if (hasImageError && alt) return showAllLetter ? alt : getFirstLetter(alt);

    if (!hasImageError && src) {
      return (
        <>
          {isLoading && (
            <Skeleton
              width={AVATAR_IMAGE_SIZE[size]}
              height={AVATAR_IMAGE_SIZE[size]}
            />
          )}
          <img
            src={src}
            alt={alt || ''}
            className={clsx(
              'h-full w-full object-cover',
              isLoading ? 'hidden' : 'block',
            )}
            width={AVATAR_IMAGE_SIZE[size]}
            height={AVATAR_IMAGE_SIZE[size]}
            onLoad={() => setIsLoading(false)}
            onError={() => {
              setHasImageError(true);
            }}
          />
        </>
      );
    }

    if (children) {
      const isString = typeof children === 'string';

      if (isString && !showAllLetter) return getFirstLetter(children);

      return children;
    }

    return <Icon iconKey={'user'} weight={'fill'} />;
  };

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    if (disabled) return;

    onClick?.(e);
  };

  return (
    <>
      <div
        ref={avatarRef}
        className={clsx(
          'flex items-center justify-center overflow-hidden uppercase hover:z-[1]',
          disabled && 'cursor-not-allowed opacity-50',
          onClick && !disabled && 'cursor-pointer',
          className,
          COLOR_THEME_STYLES[_colorTheme],
          AVATAR_SIZE[size],
          BUTTON_ROUNDED[rounded],
        )}
        onClick={handleClick}
        {...props}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {renderer()}
        {isOpen && popover && (
          <AvatarPopoverPortal targetRef={avatarRef} popover={popover} />
        )}
      </div>
    </>
  );
};

export default Avatar;

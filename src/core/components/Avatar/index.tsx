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
import { COLOR_THEME_STYLES } from '@/constants/theme';
import {
  AVATAR_IMAGE_SIZE,
  AVATAR_SIZE,
  AVATAR_SIZE_VARIANTS,
} from '@/core/components/Avatar/constants';
import { AvatarProps } from '@/core/components/Avatar/types';
import { getFirstLetter } from '@/utilities/letter';
import Icon from '@/core/components/Icon';
import getAvatarColorTheme from '@/core/components/Avatar/utils/getAvatarColorTheme';
import Popover from '@/core/components/Popover';

const Avatar = ({
  src,
  alt,
  children,
  popover,
  popoverOptions,
  rootRef,
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
  const isFirst = useRef(true);
  const [hasImageError, setHasImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const _colorTheme = useMemo(() => {
    if (!isFirst.current) {
      return getAvatarColorTheme({ colorTheme, alt, useRandomColorTheme });
    }

    isFirst.current = false;
  }, [colorTheme, alt, useRandomColorTheme, isFirst.current]);

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
    <Popover
      trigger={
        <div
          className={clsx(
            'relative flex items-center justify-center overflow-hidden uppercase hover:z-[1]',
            disabled && 'cursor-not-allowed opacity-50',
            onClick && !disabled && 'cursor-pointer',
            className,
            _colorTheme && COLOR_THEME_STYLES[_colorTheme],
            AVATAR_SIZE[size],
            BUTTON_ROUNDED[rounded],
          )}
          onClick={handleClick}
          {...props}
        >
          {renderer()}
        </div>
      }
      popover={popover}
      rootRef={rootRef}
      popoverOptions={popoverOptions}
      useHover={useHover}
    />
  );
};

export default Avatar;

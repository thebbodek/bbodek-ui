import clsx from 'clsx';
import { PropsWithChildren } from 'react';

import AvatarSkeleton from '@/core/components/Avatar/AvatarSkeleton';
import { AVATAR_IMAGE_SIZE } from '@/core/components/Avatar/constants';
import { AvatarContentProps } from '@/core/components/Avatar/types';
import Icon from '@/core/components/Icon';
import { getFirstLetter } from '@/utilities/letter';

const AvatarContent = ({
  alt,
  src,
  size,
  rounded,
  showAllLetter,
  isLoading,
  hasImageError,
  setIsLoading,
  setHasImageError,
  children,
}: PropsWithChildren<AvatarContentProps>) => {
  const renderer = () => {
    if (hasImageError && alt) return showAllLetter ? alt : getFirstLetter(alt);

    if (!hasImageError && src) {
      return (
        <>
          {isLoading && <AvatarSkeleton rounded={rounded} size={size} />}
          <img
            className={clsx(
              'h-full w-full object-cover',
              isLoading ? 'hidden' : 'block',
            )}
            alt={alt || ''}
            height={AVATAR_IMAGE_SIZE[size]}
            src={src}
            width={AVATAR_IMAGE_SIZE[size]}
            onError={() => setHasImageError(true)}
            onLoad={() => setIsLoading(false)}
          />
        </>
      );
    }

    if (children) {
      const isString = typeof children === 'string';

      if (isString && !showAllLetter) return getFirstLetter(children);

      return children;
    }

    return <Icon iconKey='user' weight='fill' />;
  };

  return <>{renderer()}</>;
};

export default AvatarContent;

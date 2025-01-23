import { PropsWithChildren } from 'react';
import clsx from 'clsx';

import { AVATAR_IMAGE_SIZE } from '@/core/components/Avatar/constants';
import { AvatarContentProps } from '@/core/components/Avatar/types';
import { getFirstLetter } from '@/utilities/letter';
import Icon from '@/core/components/Icon';
import AvatarSkeleton from '@/core/components/Avatar/AvatarSkeleton';

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
          {isLoading && <AvatarSkeleton size={size} rounded={rounded} />}
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
            onError={() => setHasImageError(true)}
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

  return <>{renderer()}</>;
};

export default AvatarContent;

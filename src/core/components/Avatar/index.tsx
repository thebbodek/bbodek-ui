import { PropsWithChildren, useState } from 'react';
import 'react-loading-skeleton/dist/skeleton.css';

import AvatarSkeleton from '@/core/components/Avatar/AvatarSkeleton';
import AvatarTrigger from '@/core/components/Avatar/AvatarTrigger';
import { AVATAR_SIZE_VARIANTS } from '@/core/components/Avatar/constants';
import { AvatarProps } from '@/core/components/Avatar/types';
import { ROUNDED } from '@/core/components/Button/ButtonBase/constants';
import Popover from '@/core/components/Popover/PopoverBase';
import useInitEffect from '@/hooks/effects/useInitEffect';

const Avatar = ({
  popover,
  popoverOptions,
  useHover = true,
  size = AVATAR_SIZE_VARIANTS['MEDIUM'],
  rounded = ROUNDED['ROUNDED_FULL'],
  ...props
}: PropsWithChildren<AvatarProps>) => {
  const [isReady, setIsReady] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasImageError, setHasImageError] = useState(false);

  useInitEffect(() => setIsReady(true));

  if (!isReady) return <AvatarSkeleton rounded={rounded} size={size} />;

  if (!popover) {
    return (
      <AvatarTrigger
        hasImageError={hasImageError}
        isLoading={isLoading}
        rounded={rounded}
        setHasImageError={setHasImageError}
        setIsLoading={setIsLoading}
        size={size}
        {...props}
      />
    );
  }

  return (
    <Popover
      trigger={
        <AvatarTrigger
          hasImageError={hasImageError}
          isLoading={isLoading}
          rounded={rounded}
          setHasImageError={setHasImageError}
          setIsLoading={setIsLoading}
          size={size}
          {...props}
        />
      }
      popover={popover}
      popoverOptions={popoverOptions}
      useHover={useHover}
    />
  );
};

export default Avatar;

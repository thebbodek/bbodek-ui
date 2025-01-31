import { PropsWithChildren, useState } from 'react';
import 'react-loading-skeleton/dist/skeleton.css';

import { ROUNDED } from '@/core/components/Button/ButtonBase/constants';
import { AVATAR_SIZE_VARIANTS } from '@/core/components/Avatar/constants';
import { AvatarProps } from '@/core/components/Avatar/types';
import useInitEffect from '@/hooks/effects/useInitEffect';
import Popover from '@/core/components/Popover/PopoverBase';
import AvatarSkeleton from '@/core/components/Avatar/AvatarSkeleton';
import AvatarTrigger from '@/core/components/Avatar/AvatarTrigger';

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

  if (!isReady) return <AvatarSkeleton size={size} rounded={rounded} />;

  if (!popover) {
    return (
      <AvatarTrigger
        size={size}
        rounded={rounded}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        hasImageError={hasImageError}
        setHasImageError={setHasImageError}
        {...props}
      />
    );
  }

  return (
    <Popover
      trigger={
        <AvatarTrigger
          size={size}
          rounded={rounded}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          hasImageError={hasImageError}
          setHasImageError={setHasImageError}
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

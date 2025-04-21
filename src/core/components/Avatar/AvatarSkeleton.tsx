import clsx from 'clsx';
import Skeleton from 'react-loading-skeleton';

import { AVATAR_IMAGE_SIZE } from '@/core/components/Avatar/constants';
import { AvatarProps } from '@/core/components/Avatar/types';
import { BUTTON_ROUNDED } from '@/core/components/Button/ButtonBase/constants';

const AvatarSkeleton = ({
  size,
  rounded,
}: Required<Pick<AvatarProps, 'size' | 'rounded'>>) => {
  return (
    <Skeleton
      width={AVATAR_IMAGE_SIZE[size]}
      height={AVATAR_IMAGE_SIZE[size]}
      containerClassName={clsx(
        'flex items-center justify-center overflow-hidden',
        BUTTON_ROUNDED[rounded],
      )}
    />
  );
};

export default AvatarSkeleton;

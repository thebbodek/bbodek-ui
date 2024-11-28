export const AVATAR_SIZE_VARIANTS = {
  X_SMALL: 'xs',
  SMALL: 'sm',
  MEDIUM: 'md',
  LARGE: 'lg',
} as const;

export const AVATAR_SIZE = {
  [AVATAR_SIZE_VARIANTS['X_SMALL']]: 'h-5 w-5 text-body-03-regular',
  [AVATAR_SIZE_VARIANTS['SMALL']]: 'h-6 w-6 text-body-03-regular',
  [AVATAR_SIZE_VARIANTS['MEDIUM']]: 'h-10 w-10 text-body-01-regular',
  [AVATAR_SIZE_VARIANTS['LARGE']]: 'h-12 w-12 text-subhead-01-regular',
};

export const AVATAR_IMAGE_SIZE = {
  [AVATAR_SIZE_VARIANTS['X_SMALL']]: 20,
  [AVATAR_SIZE_VARIANTS['SMALL']]: 24,
  [AVATAR_SIZE_VARIANTS['MEDIUM']]: 40,
  [AVATAR_SIZE_VARIANTS['LARGE']]: 48,
};

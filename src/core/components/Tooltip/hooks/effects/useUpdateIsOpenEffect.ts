import { useEffect } from 'react';

import { UseUpdateIsOpenEffectProps } from '@/core/components/Tooltip/types';

export const useUpdateIsOpenEffect = ({
  hidden,
  isKeepFloating,
  setIsOpen,
}: UseUpdateIsOpenEffectProps) => {
  useEffect(() => {
    setIsOpen(!hidden && isKeepFloating);
  }, [hidden, isKeepFloating]);
};

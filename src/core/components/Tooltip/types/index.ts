import {
  Dispatch,
  HTMLAttributes,
  PropsWithChildren,
  ReactNode,
  SetStateAction,
} from 'react';
import { UseFloatingOptions } from '@floating-ui/react';

import { ButtonProps } from '@/core/components/Button/Button/types';
import { TypographyProps } from '@/core/components/Typography/types';

export interface TooltipProps
  extends PropsWithChildren,
    Pick<HTMLAttributes<HTMLDivElement>, 'className'>,
    Pick<Partial<UseFloatingOptions>, 'placement'>,
    Pick<ButtonProps, 'colorTheme' | 'rounded'>,
    Pick<TypographyProps, 'theme'> {
  content: ReactNode;
  hasArrow?: boolean;
  hidden?: boolean;
  rootClassName?: HTMLAttributes<HTMLDivElement>['className'];
  gap?: number;
  isKeepFloating?: boolean;
}

export interface UseUpdateIsOpenEffectProps
  extends Required<Pick<TooltipProps, 'hidden' | 'isKeepFloating'>> {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

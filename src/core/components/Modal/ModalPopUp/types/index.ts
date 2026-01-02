import { HTMLAttributes } from 'react';

import { ModalBaseProps } from '../../ModalBase/types';
import { SectionProps } from '@/core/components/Section/types';

export interface ModalPopUpProps
  extends
    Pick<SectionProps<'section'>, 'hasRounded' | 'hasShadow' | 'rounded'>,
    Pick<
      ModalBaseProps,
      'target' | 'isOpen' | 'onClose' | 'useClickOutsideEvent'
    >,
    HTMLAttributes<HTMLElement> {}

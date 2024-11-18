import { DialogHTMLAttributes } from 'react';

import { VARIANTS } from '../constants';
import { PortalProps } from '@/core/components/Portal/types';

export type VariantsType = (typeof VARIANTS)[keyof typeof VARIANTS];

export interface ModalBaseProps
  extends DialogHTMLAttributes<HTMLDialogElement>,
    PortalProps {
  variants: VariantsType;
  isOpen: boolean;
  dimmed?: boolean;
  onClose?: () => void;
}

import { DialogHTMLAttributes } from 'react';

import { ModalPortalProps } from '../../ModalPortal';
import { VARIANTS } from '../constants';

export type VariantsType = (typeof VARIANTS)[keyof typeof VARIANTS];

export interface ModalBaseProps
  extends DialogHTMLAttributes<HTMLDialogElement>,
    ModalPortalProps {
  variants: VariantsType;
  isOpen: boolean;
  dimmed?: boolean;
  onClose?: () => void;
}

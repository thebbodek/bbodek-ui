import { HTMLAttributes } from 'react';

import { ModalBaseProps } from '../../Modal/ModalBase/types';
import { BOTTOM_SHEET_ROUNDED_VARIANTS } from '@/core/components/BottomSheet/constants';

export type ButtonBottomSheetRoundedTypes =
  (typeof BOTTOM_SHEET_ROUNDED_VARIANTS)[keyof typeof BOTTOM_SHEET_ROUNDED_VARIANTS];

export interface BottomSheetProps
  extends Pick<ModalBaseProps, 'target' | 'isOpen' | 'useClickOutsideEvent'>,
    Omit<HTMLAttributes<HTMLElement>, 'title'> {
  useCloseBtn?: boolean;
  onClose: ModalBaseProps['onClose'];
  rounded?: ButtonBottomSheetRoundedTypes;
}

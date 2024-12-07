import { HTMLAttributes } from 'react';

import { ModalBaseProps } from '../../Modal/ModalBase/types';
import { TypographyProps } from '../../Typography/types';

export interface DrawerProps
  extends Pick<ModalBaseProps, 'target' | 'isOpen' | 'useClickOutsideEvent'>,
    Omit<HTMLAttributes<HTMLElement>, 'title'> {
  title: TypographyProps<'strong'>['text'];
  titleSub?: TypographyProps<'span'>['text'];
  onClose: ModalBaseProps['onClose'];
}

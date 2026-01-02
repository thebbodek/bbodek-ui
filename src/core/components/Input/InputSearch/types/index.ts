import { MutableRefObject } from 'react';

import { UseInputProps } from '../../hooks/useInput';
import { InputBaseProps } from '../../InputBase/types';
import { ROUNDED } from '../constants';

export interface InputSearchProps<T extends React.ElementType>
  extends
    Omit<React.InputHTMLAttributes<HTMLInputElement>, 'readOnly' | 'disabled'>,
    Pick<
      InputBaseProps<T>,
      | 'feedback'
      | 'rootClassName'
      | 'error'
      | 'readOnly'
      | 'disabled'
      | 'sub'
      | 'badge'
    >,
    Pick<UseInputProps, 'regCallback'> {
  rootElement?: T;
  rounded: RoundedType;
  formSubmitHandler?: (e: React.FormEvent<HTMLFormElement>) => void;
  inputRef?: MutableRefObject<HTMLInputElement | null>;
}

export type RoundedType = (typeof ROUNDED)[keyof typeof ROUNDED];

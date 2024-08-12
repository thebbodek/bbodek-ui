import { InputBaseProps } from '../../InputBase/types';
import { UseInputProps } from '../../hooks/useInput';
import { ROUNDED } from '../constants';

export interface InputSearchProps<T extends React.ElementType>
  extends Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      'readOnly' | 'disabled'
    >,
    Pick<
      InputBaseProps<T>,
      'feedback' | 'rootClassName' | 'error' | 'readOnly' | 'disabled' | 'sub'
    >,
    Pick<UseInputProps, 'regCallback'> {
  rootElement?: T;
  rounded: RoundedType;
  formSubmitHandler?: (e: React.FormEvent<HTMLFormElement>) => void;
}

export type RoundedType = (typeof ROUNDED)[keyof typeof ROUNDED];

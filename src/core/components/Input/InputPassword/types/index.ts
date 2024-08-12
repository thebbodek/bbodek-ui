import { InputBaseProps } from '../../InputBase/types';
import { UseInputProps } from '../../hooks/useInput';

export interface InputPasswordProps
  extends Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      'readOnly' | 'disabled'
    >,
    Pick<
      InputBaseProps<'div'>,
      | 'feedback'
      | 'rootClassName'
      | 'label'
      | 'error'
      | 'labelColor'
      | 'readOnly'
      | 'disabled'
      | 'sub'
    >,
    Pick<UseInputProps, 'regCallback'> {}

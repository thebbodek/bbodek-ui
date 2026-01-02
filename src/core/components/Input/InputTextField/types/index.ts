import { UseInputProps } from '../../hooks/useInput';
import { InputBaseProps } from '../../InputBase/types';

export interface InputTextFieldProps
  extends
    Omit<React.InputHTMLAttributes<HTMLInputElement>, 'readOnly' | 'disabled'>,
    Pick<
      InputBaseProps<'div'>,
      | 'feedback'
      | 'rootClassName'
      | 'label'
      | 'labelColor'
      | 'borderColor'
      | 'error'
      | 'readOnly'
      | 'disabled'
      | 'sub'
      | 'feedbackColor'
      | 'badge'
    >,
    Pick<UseInputProps, 'regCallback'> {}

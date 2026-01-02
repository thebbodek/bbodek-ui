import { UseInputProps } from '../../hooks/useInput';
import { InputBaseProps } from '../../InputBase/types';

export interface InputPasswordProps
  extends
    Omit<React.InputHTMLAttributes<HTMLInputElement>, 'readOnly' | 'disabled'>,
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
      | 'badge'
    >,
    Pick<UseInputProps, 'regCallback'> {}

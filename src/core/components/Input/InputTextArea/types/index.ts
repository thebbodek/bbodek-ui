import { UseInputProps } from '../../hooks/useInput';
import { InputBaseProps } from '../../InputBase/types';
import { SIZE } from '../constants';

export type TextAreaSizeType = (typeof SIZE)[keyof typeof SIZE];

export interface InputTextAreaProps
  extends
    Omit<
      React.TextareaHTMLAttributes<HTMLTextAreaElement>,
      'disabled' | 'readOnly'
    >,
    Pick<
      InputBaseProps<'div'>,
      | 'feedback'
      | 'rootClassName'
      | 'inputRootClassName'
      | 'label'
      | 'labelColor'
      | 'borderColor'
      | 'error'
      | 'readOnly'
      | 'disabled'
      | 'sub'
      | 'badge'
    >,
    Pick<UseInputProps, 'regCallback'> {
  textAreaHeight?: TextAreaSizeType;
  maxLength?: React.TextareaHTMLAttributes<HTMLTextAreaElement>['maxLength'];
}

import { InputBaseProps } from '../../InputBase/types';
import { UseInputProps } from '../../hooks/useInput';
import { SIZE } from '../constants';

export type TextAreaSizeType = (typeof SIZE)[keyof typeof SIZE];

export interface InputTextAreaProps
  extends Omit<
      React.TextareaHTMLAttributes<HTMLTextAreaElement>,
      'disabled' | 'readOnly'
    >,
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
    >,
    Pick<UseInputProps, 'regCallback'> {
  textAreaHeight: TextAreaSizeType;
  maxLength: React.TextareaHTMLAttributes<HTMLTextAreaElement>['maxLength'];
}

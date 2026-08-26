import { Meta } from '@storybook/react';
import { useState } from 'react';

import { TextAreaSizeOptions } from './constants';
import InputTextArea from './index';
import { InputTextAreaProps } from './types';

const meta = {
  title: 'core/Input/InputTextArea',
  component: InputTextArea,
  argTypes: {
    label: {
      control: 'text',
      description: 'InputTextArea Label',
    },
    textAreaHeight: {
      control: 'select',
      options: TextAreaSizeOptions,
      description: 'InputTextArea Height',
    },
    maxLength: {
      control: 'number',
      description: 'InputTextArea Max Length',
    },
    regCallback: {
      description: 'Input RegEx',
    },
    readOnly: {
      control: 'boolean',
      description: 'Input readOnly',
    },
    disabled: {
      control: 'boolean',
      description: 'Input disabled',
    },
  },
} satisfies Meta<typeof InputTextArea>;

export default meta;

export const Default = (props: InputTextAreaProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- maxLength·textAreaHeight를 스토리 고정값으로 덮기 위해 rest에서 제외하는 의도적 추출
  const { label, maxLength, textAreaHeight, ...rest } = props;
  const [currentValue, setCurrentValue] = useState('');
  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setCurrentValue(e.target.value);

  return (
    <InputTextArea
      inputRootClassName='w-[30rem] h-[10rem]'
      label={label}
      maxLength={50}
      placeholder='검색하기'
      value={currentValue}
      onChange={onChangeHandler}
      {...rest}
    />
  );
};

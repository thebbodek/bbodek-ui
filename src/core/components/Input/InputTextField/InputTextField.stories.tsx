import { Meta } from '@storybook/react';
import { useState } from 'react';

import { ColorOptions } from '@/constants/color';
import InputTextField from './index';
import { InputTextFieldProps } from './types';

const meta = {
  title: 'core/Input/InputTextField',
  component: InputTextField,
  argTypes: {
    label: {
      control: 'text',
      description: 'InputTextField Label',
    },
    labelColor: {
      control: 'select',
      options: ColorOptions,
      defaultValue: 'gray-04',
      description: 'Bbodek DesignSystem Colors',
    },
    borderColor: {
      control: 'select',
      options: ColorOptions,
      defaultValue: 'gray-03',
      description: 'Bbodek DesignSystem Colors',
    },
    disabled: {
      control: 'boolean',
      description: 'Input disabled',
    },
    readOnly: {
      control: 'boolean',
      description: 'Input readOnly',
    },
    regCallback: {
      description: 'Input RegEx',
    },
  },
} satisfies Meta<typeof InputTextField>;

export default meta;

export const Default = (props: InputTextFieldProps) => {
  const { label, ...rest } = props;
  const [currentValue, setCurrentValue] = useState('');
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCurrentValue(e.target.value);

  return (
    <div className='w-[400px]'>
      <InputTextField
        label={label ?? '레이블'}
        placeholder='placeholder'
        value={currentValue}
        onChange={onChangeHandler}
        required
        {...rest}
      />
    </div>
  );
};

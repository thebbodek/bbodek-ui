import { Meta } from '@storybook/react';
import { useState } from 'react';

import InputPassword from './index';
import { InputPasswordProps } from './types';

const meta = {
  title: 'core/Input/InputPassword',
  component: InputPassword,
  argTypes: {
    label: {
      control: 'text',
      description: 'InputPassword Label',
    },
    regCallback: {
      description: 'Input RegEx',
    },
  },
} satisfies Meta<typeof InputPassword>;

export default meta;

export const Default = (props: InputPasswordProps) => {
  const [currentValue, setCurrentValue] = useState('');
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCurrentValue(e.target.value);

  return (
    <div className='w-[400px]'>
      <InputPassword
        value={currentValue}
        onChange={onChangeHandler}
        required
        {...props}
      />
    </div>
  );
};

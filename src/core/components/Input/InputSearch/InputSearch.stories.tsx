import { Meta } from '@storybook/react';
import { useState } from 'react';

import InputSearch from './index';

const meta = {
  title: 'core/Input/InputSearch',
  component: InputSearch,
  argTypes: {
    formSubmitHandler: {
      description: 'Form Submit Event',
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
} satisfies Meta<typeof InputSearch>;

export default meta;

export const Default = () => {
  const [currentValue, setCurrentValue] = useState('');
  const onSubmitHandler = () => alert('onSubmit');
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCurrentValue(e.target.value);

  return (
    <div className='w-[500px]'>
      <InputSearch
        formSubmitHandler={onSubmitHandler}
        placeholder='검색하기'
        rounded='rounded-8'
        value={currentValue}
        onChange={onChangeHandler}
      />
    </div>
  );
};

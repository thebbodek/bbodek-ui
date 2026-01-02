import { Meta } from '@storybook/react';
import { useId, useState } from 'react';

import InputBase from './index';
import { InputBaseProps } from './types';
import { ColorOptions } from '@/constants/color';

const meta = {
  title: 'core/Input/InputBase',
  component: InputBase,
  argTypes: {
    inputId: {
      control: 'text',
      description: 'Input & Label Id',
    },
    element: {
      control: 'text',
      defaultValue: 'div',
      description: 'HTML Tag',
    },
    rootClassName: {
      control: 'text',
      description: 'InputBase Root Element ClassName',
    },
    inputRootClassName: {
      control: 'text',
      description: 'InputBase Input Root Element ClassName',
    },
    label: {
      control: 'text',
      description: 'Input Label',
    },
    startComponent: {
      control: 'text',
      description: 'Input start Component',
    },
    inputComponent: {
      control: 'text',
      description: 'Input Component',
    },
    endComponent: {
      control: 'text',
      description: 'Input end Component',
    },
    required: {
      control: 'boolean',
      description: 'Input Required',
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
  },
} satisfies Meta<typeof InputBase>;

export default meta;

export const Default = (props: InputBaseProps<'div'>) => {
  const { label, inputId, element, inputComponent, ...rest } = props;
  const id = useId();
  const [currentValue, setCurrentValue] = useState('');
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCurrentValue(e.target.value);

  return (
    <div className='w-[400px]'>
      <InputBase
        element={element}
        label={label}
        inputId={inputId ?? id}
        inputComponent={
          !inputComponent ? (
            <input
              id={id}
              className={'bbodek-field'}
              type='text'
              onChange={onChangeHandler}
              value={currentValue}
              required
            />
          ) : (
            inputComponent
          )
        }
        {...rest}
      />
    </div>
  );
};

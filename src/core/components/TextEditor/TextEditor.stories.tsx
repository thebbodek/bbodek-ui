import { Meta } from '@storybook/react';
import React from 'react';

import TextEditor from '@/core/components/TextEditor/index';

const meta = {
  title: 'core/TextEditor',
  component: TextEditor,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'select',
      options: ['Small', 'Large'],
    },
  },
} satisfies Meta<typeof TextEditor>;

export default meta;

export const SmallTextEditor = () => {
  const [value, setValue] = React.useState('');
  return (
    <div className={'h-[200px] w-[500px]'}>
      <TextEditor value={value} onChange={setValue} />
    </div>
  );
};

export const LargeTextEditor = () => {
  const [value, setValue] = React.useState('');
  return (
    <div className={'h-[500px] w-[500px]'}>
      <TextEditor value={value} onChange={setValue} />
    </div>
  );
};

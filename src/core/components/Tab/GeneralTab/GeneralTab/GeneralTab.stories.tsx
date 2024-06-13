import { Meta } from '@storybook/react';
import { useState } from 'react';

import GeneralTab from './index';

const meta = {
  title: 'core/Tab/GeneralTab/GeneralTab',
  component: GeneralTab,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
  argTypes: {},
} satisfies Meta<typeof GeneralTab>;

export default meta;

export const Default = () => {
  const [currentValue, setCurrentValue] = useState('realName');
  const data = [
    { key: 'realName', label: '실제 반명' },
    { key: 'packageName', label: '포장 반명' },
  ];

  const items = data.map((item) => (
    <GeneralTab.Item
      label={item.label}
      name={'className'}
      checked={item.key === currentValue}
      value={item.key}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;

        setCurrentValue(value);
      }}
    />
  ));

  return (
    <div className='w-[30rem]'>
      <GeneralTab items={items} />
    </div>
  );
};

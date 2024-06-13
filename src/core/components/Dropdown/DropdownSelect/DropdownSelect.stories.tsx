import { Meta } from '@storybook/react';
import { useState } from 'react';

import DropdownSelect from './index';

const meta = {
  title: 'core/Dropdown/DropdownSelect',
  component: DropdownSelect,
  argTypes: {},
} satisfies Meta<typeof DropdownSelect>;

export default meta;

export const Default = () => {
  const [currentValue, setCurrentValue] = useState('');
  const data = ['2023년', '2024년', '2025년'];

  const items = data.map((item, idx) => (
    <DropdownSelect.Item
      key={idx}
      checked={currentValue === item}
      onClick={() => setCurrentValue(item)}
    >
      {item}
    </DropdownSelect.Item>
  ));

  return (
    <DropdownSelect
      trigger={
        <DropdownSelect.Trigger
          currentValue={currentValue}
          placeholder='선택해주세요'
        />
      }
      content={<DropdownSelect.Items items={items} />}
    />
  );
};

import { Meta } from '@storybook/react';

import { CaretDown } from '@phosphor-icons/react';
import { useState } from 'react';
import DropdownBase from './index';

const meta = {
  title: 'core/Dropdown/DropdownBase',
  component: DropdownBase,
  argTypes: {},
} satisfies Meta<typeof DropdownBase>;

export default meta;

export const Default = () => {
  const [currentValue, setCurrentValue] = useState('');

  const data = ['A반', 'B반', 'C반', 'D반', 'E반'];

  const items = data.map((item) => (
    <DropdownBase.Item onClick={() => setCurrentValue(item)}>
      {item}
    </DropdownBase.Item>
  ));

  return (
    <DropdownBase
      trigger={
        <DropdownBase.Trigger>
          {currentValue || '옵션을 선택해주세요'}
        </DropdownBase.Trigger>
      }
      content={<DropdownBase.Items items={items} />}
    />
  );
};

export const DropdownBaseWithIcon = () => {
  const [currentValue, setCurrentValue] = useState('');

  const data = ['A반', 'B반', 'C반', 'D반', 'E반'];

  const items = data.map((item, idx) => (
    <DropdownBase.Item key={idx} onClick={() => setCurrentValue(item)}>
      {item}
    </DropdownBase.Item>
  ));

  return (
    <DropdownBase
      trigger={
        <DropdownBase.Trigger>
          {({ isToggle }) => (
            <div className='flex items-center'>
              {currentValue || '옵션을 선택해주세요'}
              <CaretDown
                size='16'
                className={isToggle ? 'rotate-180' : 'rotate-0'}
              />
            </div>
          )}
        </DropdownBase.Trigger>
      }
      content={<DropdownBase.Items items={items} />}
    />
  );
};

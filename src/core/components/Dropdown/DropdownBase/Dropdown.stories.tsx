import { Meta } from '@storybook/react';
import { useState } from 'react';

import DropdownBase from './index';
import Icon from '@/core/components/Icon';

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
    <DropdownBase.Item
      checked={item === currentValue}
      key={item}
      onClick={() => setCurrentValue(item)}
    >
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
      className='w-60'
      content={<DropdownBase.Items items={items} />}
    />
  );
};

export const DropdownBaseWithIcon = () => {
  const [currentValue, setCurrentValue] = useState('');

  const data = ['A반', 'B반', 'C반', 'D반', 'E반'];

  const items = data.map((item) => (
    <DropdownBase.Item
      checked={item === currentValue}
      key={item}
      onClick={() => setCurrentValue(item)}
    >
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
              <Icon
                className={isToggle ? 'rotate-180' : 'rotate-0'}
                iconKey='caret-down'
              />
            </div>
          )}
        </DropdownBase.Trigger>
      }
      className='w-60'
      content={<DropdownBase.Items items={items} />}
    />
  );
};

export const DropdownBaseWithSearch = () => {
  const [currentValue, setCurrentValue] = useState('');

  const data = ['A반', 'B반', 'C반', 'D반', 'E반'];

  const items = data.map((item) => (
    <DropdownBase.Item
      checked={item === currentValue}
      key={item}
      onClick={() => setCurrentValue(item)}
    >
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
              <Icon
                className={isToggle ? 'rotate-180' : 'rotate-0'}
                iconKey='caret-down'
              />
            </div>
          )}
        </DropdownBase.Trigger>
      }
      className='w-60'
      content={<DropdownBase.Items items={items} useSearch />}
    />
  );
};

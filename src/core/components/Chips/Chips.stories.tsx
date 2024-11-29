import { Meta } from '@storybook/react';
import { useRef, useState } from 'react';

import Chips from '@/core/components/Chips/index';
import IconButton from '@/core/components/Button/IconButton';
import Icon from '@/core/components/Icon';

const meta = {
  title: 'core/Chips',
  component: Chips,
} satisfies Meta<typeof Chips>;

export default meta;

export const Default = () => {
  const [values, setValues] = useState([
    { id: 'test', label: 'test' },
    { id: 'test2', label: 'test2' },
    { id: 'test3', label: 'test3' },
  ]);
  const chipsRef = useRef<HTMLUListElement>(null);

  const handleDelete = ({ id }: { id: string }) => {
    setValues((prevValue) => prevValue.filter((item) => id !== item.id));
  };

  const handleAdd = () => {
    setValues((prevValues) => [
      ...prevValues,
      {
        id: `test${prevValues.length + 1}`,
        label: `test${prevValues.length + 1}`,
      },
    ]);
  };

  return (
    <div className={'flex max-w-[300px] gap-2'}>
      <Chips
        rootRef={chipsRef}
        items={values}
        onDelete={handleDelete}
        colorTheme={'secondary'}
      />
      <IconButton
        size={'h-29'}
        rounded={'rounded-full'}
        colorTheme={'primary'}
        icon={<Icon iconKey={'plus'} weight={'bold'} />}
        className={'flex-shrink-0'}
        onClick={handleAdd}
      />
    </div>
  );
};

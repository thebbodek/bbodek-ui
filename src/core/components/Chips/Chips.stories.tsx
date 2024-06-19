import { Meta } from '@storybook/react';
import { useRef, useState } from 'react';
import { Plus } from '@phosphor-icons/react';

import Chips from '@/core/components/Chips/index';
import IconButton from '@/core/components/Button/IconButton';

const meta = {
  title: 'core/Chips',
  component: Chips,
} satisfies Meta<typeof Chips>;

export default meta;

export const Default = () => {
  const [values, setValues] = useState(['test', 'test2', 'test3']);
  const chipsRef = useRef<HTMLUListElement>(null);

  const handleDelete = (item: string) => {
    setValues((prevValue) => prevValue.filter((v) => v !== item));
  };

  const handleAdd = () => {
    setValues((prevValues) => [...prevValues, `test${prevValues.length + 1}`]);
  };

  return (
    <div className={'flex max-w-[300px] gap-2'}>
      <Chips rootRef={chipsRef} items={values} onDelete={handleDelete} />
      <IconButton
        size={'h-29'}
        rounded={'rounded-full'}
        colorTheme={'primary'}
        icon={<Plus weight={'bold'} />}
        className={'flex-shrink-0'}
        onClick={handleAdd}
      />
    </div>
  );
};

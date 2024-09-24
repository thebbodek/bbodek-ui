import { Meta } from '@storybook/react';
import { ChangeEvent, useState } from 'react';

import DropdownMultiple from './index';
import {
  ValueWithLabel,
  ValueWithLabelType,
} from '@/core/components/Dropdown/DropdownMultiple/types';

const meta = {
  title: 'core/Dropdown/DropdownMultiple',
  component: DropdownMultiple,
  argTypes: {},
} satisfies Meta<typeof DropdownMultiple>;

export default meta;

export const Default = () => {
  const [currentValues, setCurrentValues] = useState<ValueWithLabel<number>[]>(
    [],
  );
  const data = [
    { value: 0, label: '2024년 5월 선정산' },
    { value: 1, label: '5월 BIZ 본정산' },
    { value: 2, label: '5월 비즈 선정산 진짜' },
    { value: 3, label: '5월 비즈 선정산 진짜 진짜' },
  ];

  const handleDelete = (value: ValueWithLabelType) => {
    setCurrentValues((prev) => prev.filter(({ value: v }) => v !== value));
  };

  const items = data.map((item, idx) => {
    const { value, label } = item;
    const isChecked = currentValues.some(({ value: v }) => v === value);

    return (
      <DropdownMultiple.Item
        key={idx}
        checked={isChecked}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          e.stopPropagation();

          const { checked } = e.target;

          if (checked) {
            setCurrentValues((prev) => [...prev, item]);
          } else {
            setCurrentValues((prev) =>
              prev.filter((prevItem) => prevItem.value !== item.value),
            );
          }
        }}
      >
        {label}
      </DropdownMultiple.Item>
    );
  });

  return (
    <DropdownMultiple
      label={'정산 선택'}
      trigger={
        <DropdownMultiple.Trigger
          variant={'chip'}
          currentValues={currentValues}
          placeholder='선택해주세요'
          onDelete={handleDelete}
        />
      }
      content={<DropdownMultiple.Items items={items} />}
      className={'w-[500px]'}
      required
    />
  );
};

export const DropdownMultipleWithSearch = () => {
  const [searchValue, setSearchValue] = useState('');
  const [currentValues, setCurrentValues] = useState<ValueWithLabel<number>[]>(
    [],
  );
  const data = [
    { value: 0, label: '2024년 5월 선정산' },
    { value: 1, label: '5월 BIZ 본정산' },
    { value: 2, label: '5월 비즈 선정산 진짜' },
    { value: 3, label: '5월 비즈 선정산 진짜 진짜' },
  ];

  const handleDelete = (value: ValueWithLabelType) => {
    setCurrentValues((prev) => prev.filter(({ value: v }) => v !== value));
  };

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const filteredData = data.filter((item) =>
    item['label'].includes(searchValue),
  );

  const items = filteredData.map((item, idx) => {
    const { value, label } = item;
    const isChecked = currentValues.some(({ value: v }) => v === value);

    return (
      <DropdownMultiple.Item
        key={idx}
        checked={isChecked}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          e.stopPropagation();

          const { checked } = e.target;

          if (checked) {
            setCurrentValues((prev) => [...prev, item]);
          } else {
            setCurrentValues((prev) =>
              prev.filter((prevItem) => prevItem.value !== item.value),
            );
          }
        }}
      >
        {label}
      </DropdownMultiple.Item>
    );
  });

  return (
    <DropdownMultiple
      label={'정산 선택'}
      trigger={
        <DropdownMultiple.Trigger
          variant={'chip'}
          currentValues={currentValues}
          placeholder='선택해주세요'
          onDelete={handleDelete}
        />
      }
      content={
        <DropdownMultiple.Items
          useSearch
          inputProps={{ value: searchValue, onChange: onSearchChange }}
          items={items}
        />
      }
      className={'w-[500px]'}
      required
    />
  );
};

import { Meta } from '@storybook/react';
import { useEffect, useState } from 'react';

import DropdownSearchLegacy from './index';
import Avatar from '@/core/components/Avatar';
import Typography from '@/core/components/Typography';

const meta = {
  title: 'core/Dropdown/DropdownSearchLegacy',
  component: DropdownSearchLegacy,
} satisfies Meta<typeof DropdownSearchLegacy>;

export default meta;

export const Default = () => {
  const [currentValue, setCurrentValue] = useState<number>();
  const options = [
    { value: 0, label: '2024년 5월 선정산' },
    { value: 1, label: '5월 BIZ 본정산' },
    { value: 2, label: '5월 비즈 선정산 진짜' },
    { value: 3, label: '5월 비즈 선정산 진짜 진짜' },
  ];

  return (
    <DropdownSearchLegacy
      label={'정산 선택'}
      currentValue={currentValue}
      options={options}
      placeholder={'선택해주세요'}
      onChange={({ value }) => {
        setCurrentValue(value);
      }}
      className={'w-60'}
      required
    />
  );
};

export const CustomDropdownSearch = () => {
  const [currentValue, setCurrentValue] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState<
    {
      id: string;
      author: string;
      width: number;
      height: number;
      url: string;
      download_url: string;
    }[]
  >([]);

  const getRandomImageList = async () => {
    try {
      const res = await fetch('https://picsum.photos/v2/list?page=2&limit=100');
      const data = await res.json();

      setImages(data);
      setIsLoading(false);
    } catch (e) {
      console.error(e);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getRandomImageList();
  }, []);

  const options = images.map(({ id, author, url }, i) => {
    const disabled = i === 0;

    return {
      value: id,
      text: author + id,
      disabled,
      label: (
        <div className={'flex items-center gap-2.5'}>
          <Avatar
            className={'shrink-0'}
            src={url}
            alt={author}
            disabled={disabled}
          />

          <div className={'flex-v-stack w-[13rem] -space-y-0.5'}>
            <Typography
              theme={'body-02-medium'}
              text={author}
              color={disabled ? 'gray-03' : 'gray-07'}
              className={'truncate'}
            />
            <Typography
              theme={'body-03-regular'}
              text={id}
              className={'truncate'}
              color={disabled ? 'gray-03' : 'gray-06'}
            />
          </div>
        </div>
      ),
    };
  });

  return (
    <DropdownSearchLegacy
      currentValue={currentValue}
      options={options}
      placeholder={'유저 이름 또는 이메일을 입력해주세요'}
      inputPlaceholder={'유저 이름 또는 이메일을 입력해주세요'}
      className={'h-[3.625rem] w-[20rem]'}
      itemHeight={56}
      onChange={({ value }) => setCurrentValue(value)}
      disabled={isLoading}
    />
  );
};

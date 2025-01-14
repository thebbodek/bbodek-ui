import { Meta } from '@storybook/react';

import IconButton from '@/core/components/Button/IconButton';
import Icon from '@/core/components/Icon';
import InfoPopover from '@/core/components/Popover/InfoPopover/index';

const meta = {
  title: 'core/Popover/InfoPopover',
  component: InfoPopover,
  argTypes: {
    heading: {
      control: 'text',
      description: 'Information Popover Heading',
    },
    items: {
      control: 'object',
      description: 'Information Popover Items',
    },
  },
} satisfies Meta<typeof InfoPopover>;

export default meta;

export const Default = () => {
  const data = [
    {
      title: '제목1',
      description: '설명',
    },
    {
      title: '제목2',
      description: '설명',
    },
  ];

  return (
    <InfoPopover
      heading={'정보 설명'}
      trigger={
        <IconButton
          colorTheme={'warning'}
          rounded={'rounded-full'}
          icon={
            <Icon iconKey={'question'} weight={'bold'} className={'text-lg'} />
          }
          size={'h-40'}
        />
      }
      items={data}
      popoverOptions={{ className: 'w-32' }}
    />
  );
};

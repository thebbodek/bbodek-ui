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
    <>
      <div id='portal' />
      <InfoPopover
        trigger={
          <IconButton
            colorTheme='warning'
            icon={<Icon className='text-lg' iconKey='question' weight='bold' />}
            rounded='rounded-full'
            size='h-40'
          />
        }
        heading='정보 설명'
        items={data}
        popoverOptions={{ className: 'w-32' }}
      />
    </>
  );
};

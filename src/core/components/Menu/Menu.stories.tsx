import { Meta } from '@storybook/react';

import IconButton from '@/core/components/Button/IconButton';
import Icon from '@/core/components/Icon';
import Menu from '@/core/components/Menu';

const meta = {
  title: 'core/Menu',
  component: Menu,
} satisfies Meta<typeof Menu>;

export default meta;

export const Default = () => {
  return (
    <>
      <div id='portal' />
      <Menu
        items={[
          <Menu.Item content='수정' />,
          <Menu.Item
            content='인터널 바로가기'
            element='a'
            href='https://internal.thebbodek.com'
            rightIcon={<Icon iconKey='arrow-square-out' weight='fill' />}
            target='_blank'
          />,
          <Menu.Item
            colorTheme='error'
            content='삭제'
            rightIcon={<Icon iconKey='trash' weight='bold' />}
          />,
        ]}
        trigger={
          <IconButton
            colorTheme='secondary'
            icon={<Icon className='text-lg' iconKey='gear' weight='fill' />}
            size='h-40'
          />
        }
      />
    </>
  );
};

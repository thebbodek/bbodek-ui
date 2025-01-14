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
    <Menu
      trigger={
        <IconButton
          colorTheme={'secondary'}
          icon={<Icon iconKey={'gear'} weight={'fill'} className={'text-lg'} />}
          size={'h-40'}
        />
      }
      items={[
        <Menu.Item key={'update'} content={'수정'} />,
        <Menu.Item
          key={'delete'}
          content={'삭제'}
          colorTheme={'error'}
          rightIcon={<Icon iconKey={'trash'} weight={'bold'} />}
        />,
      ]}
      popoverOptions={{ className: 'w-20' }}
    />
  );
};

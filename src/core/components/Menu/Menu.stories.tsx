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
      <div id={'portal'} />
      <Menu
        trigger={
          <IconButton
            colorTheme={'secondary'}
            icon={
              <Icon iconKey={'gear'} weight={'fill'} className={'text-lg'} />
            }
            size={'h-40'}
          />
        }
        items={[
          <Menu.Item content={'수정'} />,
          <Menu.Item
            element={'a'}
            href={'https://internal.thebbodek.com'}
            target={'_blank'}
            content={'인터널 바로가기'}
            rightIcon={<Icon iconKey={'arrow-square-out'} weight={'fill'} />}
          />,
          <Menu.Item
            content={'삭제'}
            colorTheme={'error'}
            rightIcon={<Icon iconKey={'trash'} weight={'bold'} />}
          />,
        ]}
      />
    </>
  );
};

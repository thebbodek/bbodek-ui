import { Meta } from '@storybook/react';

import { SIZE } from '@/core/components/Label/constants';
import { AvatarGroupProps } from './types';
import AvatarGroup from './index';
import Avatar from '@/core/components/Avatar';
import Section from '@/core/components/Section';

const meta = {
  title: 'core/AvatarGroup',
  component: AvatarGroup,
  argTypes: {
    max: {
      control: 'number',
      description: 'AvatarGroup Max',
    },
    total: {
      control: 'number',
      description: 'AvatarGroup Total',
    },
    spacing: {
      control: 'select',
      options: Object.values(SIZE),
      description: 'AvatarGroup Spacing',
    },
  },
} satisfies Meta<typeof AvatarGroup>;

export default meta;

const members = ['강준영', '정휘영', '박진주', '김미림', '이준호', '김지혜'];
const items = members.map((member) => (
  <Avatar
    key={member}
    popover={<>{member}</>}
    popoverOptions={{ colorTheme: 'white', className: 'p-2' }}
    alt={member}
  >
    {member}
  </Avatar>
));

export const MaxAvatarGroup = (props: AvatarGroupProps) => {
  return (
    <>
      <div id={'portal'} />
      <Section className={'overflow-hidden border p-4'}>
        <AvatarGroup
          items={items}
          max={3}
          popoverOptions={{ colorTheme: 'white', className: 'p-2' }}
          overflowPopover={({ overflowItems }) => (
            <ul className={'flex-v-stack gap-y-1'}>
              {overflowItems.map((item) => (
                <li key={item.alt} className={'flex items-center gap-2'}>
                  <Avatar size={'sm'} alt={item.alt}>
                    {item.children}
                  </Avatar>
                  {item.alt}
                </li>
              ))}
            </ul>
          )}
        />
      </Section>
    </>
  );
};

export const TotalAvatarGroup = (props: AvatarGroupProps) => {
  return (
    <>
      <div id={'portal'} />
      <Section className={'overflow-hidden border p-4'}>
        <AvatarGroup items={items} total={50} />
      </Section>
    </>
  );
};

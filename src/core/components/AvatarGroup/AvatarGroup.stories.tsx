import { Meta } from '@storybook/react';

import AvatarGroup from './index';
import Avatar from '@/core/components/Avatar';
import { SIZE } from '@/core/components/Label/constants';
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
    alt={member}
    key={member}
    popover={() => <>{member}</>}
    popoverOptions={{ colorTheme: 'white', className: 'p-2' }}
  >
    {member}
  </Avatar>
));

export const MaxAvatarGroup = () => {
  return (
    <>
      <div id='portal' />
      <Section className='overflow-hidden border p-4'>
        <AvatarGroup
          overflowPopover={({ overflowItems }) => (
            <ul className='flex-v-stack gap-y-1'>
              {overflowItems.map((item) => (
                <li className='flex items-center gap-2' key={item.alt}>
                  <Avatar alt={item.alt} size='sm'>
                    {item.children}
                  </Avatar>
                  {item.alt}
                </li>
              ))}
            </ul>
          )}
          items={items}
          max={3}
          popoverOptions={{ colorTheme: 'white', className: 'p-2' }}
        />
      </Section>
    </>
  );
};

export const TotalAvatarGroup = () => {
  return (
    <>
      <div id='portal' />
      <Section className='overflow-hidden border p-4'>
        <AvatarGroup items={items} total={50} />
      </Section>
    </>
  );
};

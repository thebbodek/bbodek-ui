import { Meta } from '@storybook/react';

import AvatarGroup from './';
import { AvatarGroupProps } from './types';
import { SIZE } from '@/core/components/Label/constants';
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

const members = [
  'jun ho',
  'hwi young',
  'ji hye',
  'mi rim',
  'jun young',
  'jin ju',
];
const items = members.map((member) => (
  <Avatar
    key={member}
    popover={
      <Section className={'mt-1 flex flex-col gap-1 p-2'} hasBorder>
        {member}
      </Section>
    }
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
          hasBorder
          overflowPopover={({ overflowItems }) => (
            <Section className={'mt-1 flex flex-col gap-1 p-2'} hasBorder>
              {overflowItems.map((item) => (
                <div key={item.alt} className={'flex items-center gap-2'}>
                  {<Avatar size={'small'}>{item.children}</Avatar>}
                  {item.alt}
                </div>
              ))}
            </Section>
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
        <AvatarGroup items={items} total={50} hasBorder />
      </Section>
    </>
  );
};

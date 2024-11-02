import { icons, IconStyle } from '@phosphor-icons/core';
import { Meta } from '@storybook/react';

import Icon from '@/core/components/Icon';
import { IconComponentProps } from '@/core/components/Icon/types';

const meta = {
  title: 'core/Icon',
  component: Icon,
  argTypes: {
    iconKey: {
      control: 'select',
      options: icons.map((icon) => icon['name']),
      defaultValue: 'acorn',
      description: '@phosphor-icons/web icon name',
    },
    weight: {
      control: 'select',
      options: Object.values(IconStyle),
      defaultValue: IconStyle['REGULAR'],
      description: '@phosphor-icons/web icon weight',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Icon>;

export default meta;

export const Default = (props: IconComponentProps) => {
  return <Icon {...props} className={'h-[2rem] w-[2rem] text-xl'} />;
};

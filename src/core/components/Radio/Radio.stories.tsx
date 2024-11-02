import { Meta } from '@storybook/react';

import Radio from './index';
import { RadioProps } from './types';
import { SVG_SIZE } from '@/core/components/Radio/constants';

const meta = {
  title: 'core/Radio',
  component: Radio,
  argTypes: {
    label: {
      control: 'text',
      description: 'Radio Label',
    },
    svgSize: {
      control: 'select',
      options: Object.keys(SVG_SIZE),
      defaultValue: 'SIZE_24',
      description: 'Radio Icon Size',
    },
  },
} satisfies Meta<typeof Radio>;

export default meta;

export const Default = (props: RadioProps) => {
  return <Radio {...props} />;
};

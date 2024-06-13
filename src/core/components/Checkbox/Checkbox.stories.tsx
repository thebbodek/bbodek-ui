import { Meta } from '@storybook/react';

import Checkbox from './index';
import { CheckboxProps } from './types';

const meta = {
  title: 'core/Checkbox',
  component: Checkbox,
  argTypes: {
    label: {
      control: 'text',
      description: 'Checkbox Label',
    },
    svgSize: {
      control: 'select',
      options: ['size-24', 'size-32'],
      defaultValue: 'size-24',
      description: 'Checkbox Icon Size',
    },
    isCircle: {
      control: 'boolean',
      description: 'Checkbox Icon Circled',
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

export const Default = (props: CheckboxProps) => {
  return <Checkbox {...props} />;
};

export const Circle = () => {
  return <Checkbox isCircle />;
};

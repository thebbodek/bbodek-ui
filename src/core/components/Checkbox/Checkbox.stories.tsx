import { Meta } from '@storybook/react';

import Checkbox from './index';
import { CheckboxProps } from './types';
import {
  CheckBoxGapVariants,
  GAP,
  SvgSizeVariants,
} from '@/core/components/Checkbox/constants';
import { TypographyOptions } from '@/constants/typography';

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
      options: SvgSizeVariants,
      defaultValue: 'size-24',
      description: 'Checkbox Icon Size',
    },
    theme: {
      control: 'select',
      options: TypographyOptions,
      defaultValue: 'body-01-regular',
      description: 'Typography Theme',
    },
    gap: {
      control: 'select',
      options: CheckBoxGapVariants,
      defaultValue: [GAP['GAP_10']],
      description: 'Checkbox Gap with label',
    },
    isCircle: {
      control: 'boolean',
      description: 'Checkbox Icon Circled',
    },
    disabled: {
      control: 'boolean',
      description: 'Checkbox Icon disabled',
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

export const Default = (props: CheckboxProps) => {
  return <Checkbox {...props} />;
};

export const Circle = (props: CheckboxProps) => {
  return <Checkbox {...props} isCircle />;
};

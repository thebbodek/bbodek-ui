import { Meta } from '@storybook/react';

import Toggle from '../Toggle/index';
import { SIZE } from './constants';
import { ToggleProps } from './types';

const meta = {
  title: 'core/Toggle',
  component: Toggle,
  argTypes: {
    label: {
      control: 'text',
      description: 'Toggle Label',
    },
    className: {
      control: 'text',
      description: 'Toggle ClassName',
    },
    checked: {
      control: 'boolean',
      description: 'Toggle Checked',
    },
    reverse: {
      control: 'boolean',
      description: 'Toggle Reverse',
    },
    disabled: {
      control: 'boolean',
      description: 'Toggle Disabled',
    },
  },
} satisfies Meta<typeof Toggle>;

export default meta;

export const Default = (props: ToggleProps) => {
  const { label, size, ...rest } = props;

  return (
    <Toggle size={size || SIZE['SMALL']} label={label || '토글'} {...rest} />
  );
};

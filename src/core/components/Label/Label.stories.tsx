import { Meta } from '@storybook/react';

import Label from './index';
import { LabelProps } from './types';
import { colorThemeOptions } from '@/constants/theme';
import Icon from '@/core/components/Icon';

const meta = {
  title: 'core/Label',
  component: Label,
  argTypes: {
    colorTheme: {
      control: 'select',
      options: colorThemeOptions,
      description: 'Label colorTheme',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Label Size',
    },
    label: {
      control: 'text',
      description: 'Label Text',
    },
  },
} satisfies Meta<typeof Label>;

export default meta;

export const Primary = (props: LabelProps) => {
  return (
    <Label
      colorTheme={props.colorTheme ?? 'primary'}
      element='dt'
      icon={<Icon iconKey='info' />}
      label={props.label ?? 'small primary'}
      size='small'
    />
  );
};

export const Error = (props: LabelProps) => {
  return (
    <Label
      colorTheme={props.colorTheme ?? 'error'}
      icon={<Icon iconKey='info' />}
      label={props.label ?? 'medium error'}
      size='medium'
    />
  );
};

export const Success = (props: LabelProps) => {
  return (
    <Label
      colorTheme={props.colorTheme ?? 'success'}
      icon={<Icon iconKey='info' />}
      label={props.label ?? 'large success'}
      size='large'
    />
  );
};

export const Warning = (props: LabelProps) => {
  return (
    <Label
      label={
        <>
          <span className='max-w-[70px] truncate'>small warning</span> 외 1개
        </>
      }
      colorTheme={props.colorTheme ?? 'warning'}
      size='small'
    />
  );
};

export const Secondary = (props: LabelProps) => {
  return (
    <Label
      colorTheme={props.colorTheme ?? 'secondary'}
      label={props.label ?? 'small secondary'}
      size='small'
    />
  );
};

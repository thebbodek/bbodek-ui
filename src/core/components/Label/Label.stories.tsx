import { Meta } from '@storybook/react';

import { colorThemeOptions } from '@/constants/theme';
import Label from './index';
import { LabelProps } from './types';
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
      element='dt'
      colorTheme={props.colorTheme ?? 'primary'}
      size='small'
      label={props.label ?? 'small primary'}
      icon={<Icon iconKey={'info'} />}
    />
  );
};

export const Error = (props: LabelProps) => {
  return (
    <Label
      colorTheme={props.colorTheme ?? 'error'}
      size='medium'
      label={props.label ?? 'medium error'}
      icon={<Icon iconKey={'info'} />}
    />
  );
};

export const Success = (props: LabelProps) => {
  return (
    <Label
      colorTheme={props.colorTheme ?? 'success'}
      size='large'
      label={props.label ?? 'large success'}
      icon={<Icon iconKey={'info'} />}
    />
  );
};

export const Warning = (props: LabelProps) => {
  return (
    <Label
      colorTheme={props.colorTheme ?? 'warning'}
      size='small'
      label={
        <>
          <span className='max-w-[70px] truncate'>small warning</span> 외 1개
        </>
      }
    />
  );
};

export const Secondary = (props: LabelProps) => {
  return (
    <Label
      colorTheme={props.colorTheme ?? 'secondary'}
      size='small'
      label={props.label ?? 'small secondary'}
    />
  );
};

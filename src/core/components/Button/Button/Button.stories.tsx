import { Meta } from '@storybook/react';

import { GAP, ROUNDED, SIZE } from '../ButtonBase/constants';
import Button from './index';
import { ButtonProps } from './types';
import { TypographyOptions } from '@/constants';
import { ColorOptions } from '@/constants/color';

const meta = {
  title: 'core/Button',
  component: Button,
  argTypes: {
    theme: {
      control: 'select',
      options: TypographyOptions,
      description: 'Button Typography Theme',
    },
    color: {
      control: 'select',
      options: ColorOptions,
      description: 'Button Typography Color',
    },
    backgroundColor: {
      control: 'select',
      options: ColorOptions,
      defaultValue: 'gray-08',
      description: 'Button Background Color',
    },
    size: {
      control: 'select',
      options: Object.keys(SIZE).map((size) => SIZE[size as keyof typeof SIZE]),
      description: 'Button Size',
    },
    gap: {
      control: 'select',
      options: Object.keys(GAP).map((gap) => GAP[gap as keyof typeof GAP]),
      description: 'Button Size',
    },
    rounded: {
      control: 'select',
      options: Object.keys(ROUNDED).map(
        (rounded) => ROUNDED[rounded as keyof typeof ROUNDED],
      ),
      description: 'Button Size',
    },
    borderColor: {
      control: 'select',
      options: ['gray-04', 'gray-03', 'gray-02', 'gray-01'],
      description: 'Button Size',
    },
    leftIcon: {
      control: 'text',
      description: 'Button Left Size',
    },
    content: {
      control: 'text',
      description: 'Button Text',
    },
    rightIcon: {
      control: 'text',
      description: 'Button Right Size',
    },
    hasUnderline: {
      control: 'boolean',
      description: 'Button With Underline',
    },
    disabled: {
      control: 'boolean',
      description: 'Button With disabled',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

export const Default = (props: ButtonProps) => {
  const { theme, color, backgroundColor, size, content, ...rest } = props;

  return (
    <Button
      theme={theme}
      color={color ?? 'white'}
      backgroundColor={backgroundColor ?? 'primary-03'}
      size={size ?? SIZE['SIZE_48']}
      content={content ?? '스케줄 등록하기'}
      className='w-[427px]'
      {...rest}
    />
  );
};

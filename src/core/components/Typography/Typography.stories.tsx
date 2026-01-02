import { Meta } from '@storybook/react';

import Typography from './index';
import { TypographyProps } from './types';
import { ColorOptions } from '@/constants/color';
import { TypographyOptions } from '@/constants/typography';

const meta = {
  title: 'core/Typography',
  component: Typography,
  argTypes: {
    element: {
      control: 'text',
      defaultValue: 'span',
      description: 'HTML Tag',
    },
    text: {
      control: 'text',
      description: 'Typography Text',
    },
    theme: {
      control: 'select',
      options: TypographyOptions,
      defaultValue: 'body-01-regular',
      description: 'Typography Theme',
    },
    color: {
      control: 'select',
      options: ColorOptions,
      defaultValue: 'gray-08',
      description: 'Typography Color',
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;

export const Default = (props: TypographyProps<React.ElementType>) => {
  const { text, ...rest } = props;

  return <Typography text={text ?? '텍스트'} {...rest} />;
};

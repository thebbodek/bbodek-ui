import { Meta } from '@storybook/react';

import TableTabItem from './index';
import { TableTabItemProps } from './types';

const meta = {
  title: 'core/Tab/TableTab/TableTabItem',
  component: TableTabItem,
  argTypes: {
    label: {
      control: 'text',
      description: 'Tab Label',
    },
  },
} satisfies Meta<typeof TableTabItem>;

export default meta;

export const Default = (props: TableTabItemProps) => {
  const { label, ...rest } = props;

  return (
    <ul>
      <TableTabItem label={label ?? '식기'} {...rest} />
    </ul>
  );
};

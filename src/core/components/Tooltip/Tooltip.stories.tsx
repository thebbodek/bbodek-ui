import { Meta } from '@storybook/react';

import Tooltip from '../Tooltip/index';

const meta = {
  title: 'core/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    tooltipContentText: {
      control: 'text',
      description: 'Tooltip Content Text',
    },
    placement: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      defaultValue: 'left',
      description: 'Tooltip Placement Position',
    },
    children: {
      control: 'text',
      description: 'Tooltip Children',
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;

export const LeftTooltip = {
  args: {
    tooltipContentText: 'Tooltip Content',
    placement: 'left',
    children: <div>Tooltip Children</div>,
  },
};

export const LeftStartTooltip = {
  args: {
    tooltipContentText: 'Tooltip Content',
    placement: 'left-start',
    children: <div>Tooltip Children</div>,
  },
};

export const LeftEndTooltip = {
  args: {
    tooltipContentText: 'Tooltip Content',
    placement: 'left-end',
    children: <div>Tooltip Children</div>,
  },
};

export const RightTooltip = {
  args: {
    tooltipContentText: 'Tooltip Content',
    placement: 'right',
    children: <div>Tooltip Children</div>,
  },
};

export const RightStartTooltip = {
  args: {
    tooltipContentText: 'Tooltip Content',
    placement: 'right-start',
    children: <div>Tooltip Children</div>,
  },
};

export const RightEndTooltip = {
  args: {
    tooltipContentText: 'Tooltip Content',
    placement: 'right-end',
    children: <div>Tooltip Children</div>,
  },
};

export const TopTooltip = {
  args: {
    tooltipContentText: 'Tooltip Content',
    placement: 'top',
    children: <div>Tooltip Children</div>,
  },
};

export const TopStartTooltip = {
  args: {
    tooltipContentText: 'Tooltip Content',
    placement: 'top-start',
    children: <div>Tooltip Children</div>,
  },
};

export const TopEndTooltip = {
  args: {
    tooltipContentText: 'Tooltip Content',
    placement: 'top-end',
    children: <div>Tooltip Children</div>,
  },
};

export const BottomTooltip = {
  args: {
    tooltipContentText: 'Tooltip Content',
    placement: 'bottom',
    children: <div>Tooltip Children</div>,
  },
};

export const BottomStartTooltip = {
  args: {
    tooltipContentText: 'Tooltip Content',
    placement: 'bottom-start',
    children: <div>Tooltip Children</div>,
  },
};

export const BottomEndTooltip = {
  args: {
    tooltipContentText: 'Tooltip Content',
    placement: 'bottom-end',
    children: <div>Tooltip Children</div>,
  },
};

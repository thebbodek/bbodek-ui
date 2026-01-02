import { Meta } from '@storybook/react';

import Tooltip from '../Tooltip/index';
import { TypographyOptions } from '@/constants';
import { COLOR_THEME } from '@/constants/theme';
import { ROUNDED } from '@/core/components/Button/ButtonBase/constants';
import { TooltipProps } from '@/core/components/Tooltip/types';

const meta = {
  title: 'core/Tooltip',
  component: Tooltip,
  argTypes: {
    content: {
      control: 'text',
      description: 'Tooltip Content Text',
    },
    placement: {
      control: 'select',
      options: [
        'top',
        'top-start',
        'top-end',
        'right',
        'right-start',
        'right-end',
        'bottom',
        'bottom-start',
        'bottom-end',
        'left',
        'left-start',
        'left-end',
      ],
      defaultValue: 'top',
      description: 'Tooltip Placement Position',
    },
    hasArrow: {
      control: 'boolean',
      description: 'Toggle Arrow',
    },
    colorTheme: {
      control: 'select',
      options: Object.keys(COLOR_THEME).map(
        (theme) => COLOR_THEME[theme as keyof typeof COLOR_THEME],
      ),
      description: 'Tooltip Rounded',
    },
    theme: {
      control: 'select',
      options: TypographyOptions,
      description: 'Tooltip Typography Theme',
    },
    rounded: {
      control: 'select',
      options: Object.keys(ROUNDED).map(
        (rounded) => ROUNDED[rounded as keyof typeof ROUNDED],
      ),
      description: 'Tooltip Rounded',
    },
    gap: {
      control: 'number',
      description: 'Tooltip Gap',
    },
    hidden: {
      control: 'boolean',
      description: 'Tooltip Hidden',
    },
    isKeepFloating: {
      control: 'boolean',
      description: 'Tooltip Keep Floating',
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;

export const Default = ({ content, placement, ...props }: TooltipProps) => {
  return (
    <Tooltip
      content={content ?? 'Hi, I am a tooltip'}
      placement={placement ?? 'top'}
      {...props}
    >
      <div className={'bg-primary-03 p-2 text-white'}>Hover Me</div>
    </Tooltip>
  );
};

export const KeepFloatingTooltip = ({
  content,
  placement,
  isKeepFloating,
  hasArrow,
  useCloseButton,
  ...props
}: TooltipProps) => {
  return (
    <Tooltip
      content={
        content ?? (
          <>
            Hi, I am a tooltip
            <br /> with multiple lines
          </>
        )
      }
      placement={placement ?? 'top'}
      isKeepFloating={isKeepFloating ?? true}
      hasArrow={hasArrow ?? true}
      useCloseButton={useCloseButton ?? true}
      {...props}
    >
      <div className={'bg-primary-03 p-2 text-white'}>Hover Me</div>
    </Tooltip>
  );
};

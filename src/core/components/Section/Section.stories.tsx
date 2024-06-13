import { Meta } from '@storybook/react';

import Section from './index';
import { SectionProps } from './types';

const meta = {
  title: 'core/Section',
  component: Section,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
  argTypes: {
    hasRounded: {
      control: 'boolean',
      defaultValue: true,
      description: 'Controls whether the component has a rounded',
    },
    hasBorder: {
      control: 'boolean',
      defaultValue: false,
      description: 'Controls whether the component has a border',
    },
    hasShadow: {
      control: 'boolean',
      defaultValue: false,
      description: 'Controls whether the component has a Box Shadow',
    },
  },
} satisfies Meta<typeof Section>;

export default meta;

export const Default = (props: SectionProps<'section'>) => {
  return (
    <Section className='h-[300px] w-[400px]' {...props}>
      section
    </Section>
  );
};

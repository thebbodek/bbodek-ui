import { Meta } from '@storybook/react';
import { useState } from 'react';

import { default as BottomSheet } from './index';
import { BottomSheetProps } from './types';

const meta = {
  title: 'core/BottomSheet',
  component: BottomSheet,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    target: {
      control: 'text',
      defaultValue: 'modal',
      description: 'BottomSheet Render Position Element id',
    },
    isOpen: {
      control: 'boolean',
      defaultValue: false,
      description: 'Open Modal',
    },
    onClose: {
      action: 'clicked',
      description: 'BottomSheet Close Function',
    },
  },
} satisfies Meta<typeof BottomSheet>;

export default meta;

export const Default = (props: BottomSheetProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = () => setIsOpen((v) => !v);

  return (
    <>
      <div className='flex h-[calc(100vh-4rem)]'>
        <main className='relative flex-1'>
          <div id={props.target ?? 'bar'} />
          <BottomSheet
            target={props.target ?? 'bar'}
            isOpen={props.isOpen || isOpen}
            onClose={onToggle}
          >
            BottomSheet
          </BottomSheet>
          <button onClick={onToggle}>BottomSheet Open!!</button>
        </main>
      </div>
    </>
  );
};

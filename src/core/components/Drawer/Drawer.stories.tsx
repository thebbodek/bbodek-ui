import { Meta } from '@storybook/react';
import { useState } from 'react';

import Drawer from './index';
import { DrawerProps } from './types';

const meta = {
  title: 'core/Drawer',
  component: Drawer,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    target: {
      control: 'text',
      defaultValue: 'portal',
      description: 'Modal Render Position Element id',
    },
    title: {
      control: 'text',
      description: 'Drawer Title',
    },
    titleSub: {
      control: 'text',
      description: 'Drawer Title Sub',
    },
    isOpen: {
      control: 'boolean',
      defaultValue: false,
      description: 'Open Modal',
    },
    onClose: {
      action: 'clicked',
      description: 'Drawer Close Function',
    },
  },
} satisfies Meta<typeof Drawer>;

export default meta;

export const Default = (props: DrawerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = () => setIsOpen((v) => !v);

  return (
    <>
      <header className='bg-gray-01 h-14'>Header</header>
      <div className='flex h-[calc(100vh-4rem)]'>
        <nav className='border-gray-01 w-[15rem] border-r'>SideBar</nav>
        <main className='relative flex-1'>
          <div id={props.target ?? 'bar'} />
          <Drawer
            title={props.title ?? '알림'}
            titleSub={props.titleSub}
            target={props.target ?? 'bar'}
            isOpen={props.isOpen || isOpen}
            onClose={onToggle}
          >
            Drawer
          </Drawer>
          <button onClick={onToggle}>Drawer Open!!</button>
        </main>
      </div>
    </>
  );
};

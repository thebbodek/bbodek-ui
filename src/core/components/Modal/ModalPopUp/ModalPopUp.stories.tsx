import { Meta } from '@storybook/react';
import { useState } from 'react';

import ModalPopUp from './index';
import { ModalPopUpProps } from './types';

const meta = {
  title: 'core/Modal/ModalPopUp',
  component: ModalPopUp,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    target: {
      control: 'text',
      defaultValue: 'portal',
      description: 'Modal Render Position Element id',
    },
    isOpen: {
      control: 'boolean',
      defaultValue: false,
      description: 'Open Modal',
    },
    onClose: {
      action: 'clicked',
      description: 'Modal Close Function',
    },
  },
} satisfies Meta<typeof ModalPopUp>;

export default meta;

export const Default = (props: ModalPopUpProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = () => setIsOpen((v) => !v);

  return (
    <>
      <div id={props.target ?? 'portal'} />
      <ModalPopUp
        target={props.target}
        isOpen={props.isOpen || isOpen}
        className='flex-v-stack h-[20rem] w-[20rem] gap-y-5 p-4'
      >
        <button className='ml-auto' onClick={onToggle}>
          닫기
        </button>
        ModalPopUp
      </ModalPopUp>
      <button onClick={onToggle}>ModalPopUp Open!!</button>
    </>
  );
};

export const ModalPopUpUseBlur = (props: ModalPopUpProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = () => setIsOpen((v) => !v);

  return (
    <>
      <div id={props.target ?? 'foo'} />
      <ModalPopUp
        target={props.target ?? 'foo'}
        isOpen={props.isOpen || isOpen}
        onClose={onToggle}
        className='h-[20rem] w-[20rem] p-4'
      >
        ModalPopUp
      </ModalPopUp>
      <button onClick={onToggle}>ModalPopUp Open!!</button>
    </>
  );
};

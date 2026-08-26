import { Meta } from '@storybook/react';
import { useRef } from 'react';

import Popover from './index';
import Button from '@/core/components/Button/Button';
import IconButton from '@/core/components/Button/IconButton';
import Icon from '@/core/components/Icon';
import Section from '@/core/components/Section';

const meta = {
  title: 'core/Popover',
  component: Popover,
} satisfies Meta<typeof Popover>;

export default meta;

const ListItem = ({ index }: { index: number }) => {
  return (
    <li className='flex border-b p-2 first:justify-end last:border-b-0 even:justify-center'>
      <Popover
        popover={({ close }) => (
          <div className='flex items-center justify-between gap-2'>
            내용입니다 {index}
            <IconButton
              colorTheme='gray'
              icon={<Icon iconKey='x' />}
              rounded='rounded-full'
              size='h-20'
              onClick={(e) => {
                e.stopPropagation();
                close();
              }}
            />
          </div>
        )}
        trigger={
          <Button
            className='px-2'
            colorTheme='secondary'
            content={`클릭 ${index}`}
            rounded='rounded-6'
            size='h-40'
          />
        }
        popoverOptions={{ colorTheme: 'white', className: 'p-2' }}
      />
    </li>
  );
};

export const Default = () => {
  const rootRef = useRef(null);

  return (
    <>
      <div id='portal' />
      <Section
        className='popover-root max-h-[16rem] w-60 overflow-y-auto'
        element='ul'
        ref={rootRef}
        hasBorder
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <ListItem index={i + 1} key={i} />
        ))}
      </Section>
    </>
  );
};

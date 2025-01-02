import { Meta } from '@storybook/react';
import { useRef } from 'react';

import { PopoverProps } from '@/core/components/Popover/types';
import Popover from './index';
import Button from '@/core/components/Button/Button';
import Section from '@/core/components/Section';
import IconButton from '@/core/components/Button/IconButton';
import Icon from '@/core/components/Icon';

const meta = {
  title: 'core/Popover',
  component: Popover,
} satisfies Meta<typeof Popover>;

export default meta;

const ListItem = ({
  rootRef,
  index,
}: Pick<PopoverProps, 'rootRef'> & { index: number }) => {
  return (
    <li className='flex border-b p-2 first:justify-end last:border-b-0 even:justify-center'>
      <Popover
        rootRef={rootRef}
        trigger={
          <Button
            size={'h-40'}
            colorTheme={'secondary'}
            content={`클릭 ${index}`}
            rounded={'rounded-6'}
            className={'px-2'}
          />
        }
        popover={({ close }) => (
          <div className={'flex items-center justify-between gap-2'}>
            내용입니다 {index}
            <IconButton
              size={'h-20'}
              colorTheme={'gray'}
              rounded={'rounded-full'}
              icon={<Icon iconKey={'x'} />}
              onClick={(e) => {
                e.stopPropagation();
                close();
              }}
            />
          </div>
        )}
        popoverOptions={{ colorTheme: 'white', className: 'p-2' }}
      />
    </li>
  );
};

export const Default = (props: PopoverProps) => {
  const rootRef = useRef(null);

  return (
    <Section
      ref={rootRef}
      element={'ul'}
      className={'max-h-[16rem] w-60 overflow-y-auto'}
      hasBorder
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <ListItem key={i} rootRef={rootRef} index={i + 1} />
      ))}
    </Section>
  );
};

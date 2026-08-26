import Icon from '@/core/components/Icon';
import { InfoPopoverProps } from '@/core/components/Popover/InfoPopover/types';
import Popover from '@/core/components/Popover/PopoverBase';
import Typography from '@/core/components/Typography';

const InfoPopover = ({
  trigger,
  heading,
  items,
  ...props
}: InfoPopoverProps) => {
  const ITEMS = () => {
    return items.map(({ title, description }, idx) => (
      <li key={idx}>
        <div className='flex gap-x-1'>
          <Typography
            text={
              <>
                <Icon className='text-[6px]' iconKey='circle' weight='fill' />
                {title}
              </>
            }
            className='flex gap-1'
            color='primary-03'
            theme='body-02-bold'
          />
        </div>
        <Typography element='p' text={description} theme='body-02-regular' />
      </li>
    ));
  };

  return (
    <Popover
      popover={
        <>
          <Typography
            className='block border-b p-3'
            color='primary-06'
            element='strong'
            text={heading}
            theme='body-02-bold'
          />
          <ul className='flex-v-stack gap-y-4 p-3'>{ITEMS()}</ul>
        </>
      }
      trigger={trigger}
      {...props}
    />
  );
};

export default InfoPopover;

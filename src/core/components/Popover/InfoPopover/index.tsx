import { InfoPopoverProps } from '@/core/components/Popover/InfoPopover/types';
import Typography from '@/core/components/Typography';
import Icon from '@/core/components/Icon';
import Popover from '@/core/components/Popover/PopoverBase';

const InfoPopover = ({
  trigger,
  heading,
  items,
  popoverOptions = {},
  ...props
}: InfoPopoverProps) => {
  const ITEMS = () => {
    return items.map(({ title, description }) => (
      <li key={title + description}>
        <div className={'flex gap-x-1'}>
          <Typography
            theme={'body-02-bold'}
            color={'primary-03'}
            text={
              <>
                <Icon
                  iconKey={'circle'}
                  weight={'fill'}
                  className={'text-[6px]'}
                />
                {title}
              </>
            }
            className={'flex gap-1'}
          />
        </div>
        <Typography
          element={'p'}
          theme={'body-02-regular'}
          text={description}
        />
      </li>
    ));
  };

  return (
    <Popover
      trigger={trigger}
      popover={
        <>
          <Typography
            element={'strong'}
            theme={'body-02-bold'}
            color={'primary-06'}
            text={heading}
            className={'block border-b p-3'}
          />
          <ul className={'flex-v-stack gap-y-4 p-3'}>{ITEMS()}</ul>
        </>
      }
      popoverOptions={{
        backgroundColor: 'white',
        hasShadow: true,
        ...popoverOptions,
      }}
      {...props}
    />
  );
};

export default InfoPopover;

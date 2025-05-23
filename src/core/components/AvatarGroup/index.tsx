import clsx from 'clsx';
import { PropsWithChildren } from 'react';

import Avatar from '@/core/components/Avatar';
import { AVATAR_SPACING } from '@/core/components/AvatarGroup/constants';
import { AvatarGroupProps } from '@/core/components/AvatarGroup/types';
import { SIZE } from '@/core/components/Label/constants';

const AvatarGroup = ({
  items,
  max = items.length,
  total = items.length,
  spacing = SIZE['SMALL'],
  overflowPopover,
  popoverOptions,
  useHover = true,
  className,
  onClick,
  ...props
}: PropsWithChildren<AvatarGroupProps>) => {
  const { size, rounded, disabled } = items[0].props;
  const visibleItems = items.slice(0, max);
  const overflowItems = items.slice(max);
  const overflowCount = total - visibleItems.length;
  const isOverflow = overflowCount > 0;
  const isFunction = typeof overflowPopover === 'function';

  return (
    <div
      className={clsx(
        'flex',
        AVATAR_SPACING[spacing],
        onClick && 'cursor-pointer',
        className,
      )}
      onClick={onClick}
      {...props}
    >
      {visibleItems}
      {isOverflow && (
        <Avatar
          colorTheme={'gray'}
          popover={
            overflowPopover && isFunction
              ? overflowPopover({
                  overflowItems: overflowItems.map((item) => item.props),
                })
              : overflowPopover
          }
          popoverOptions={popoverOptions}
          useHover={useHover}
          size={size}
          rounded={rounded}
          disabled={disabled}
          showAllLetter
        >
          {`+${overflowCount}`}
        </Avatar>
      )}
    </div>
  );
};

export default AvatarGroup;

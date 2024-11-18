import { PropsWithChildren } from 'react';
import clsx from 'clsx';

import { AvatarGroupProps } from '@/core/components/AvatarGroup/types';
import { SIZE } from '@/core/components/Label/constants';
import { AVATAR_SPACING } from '@/core/components/AvatarGroup/constants';
import Avatar from '@/core/components/Avatar';

const AvatarGroup = ({
  items,
  max = items.length,
  total = items.length,
  spacing = SIZE['SMALL'],
  overflowPopover,
  className,
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
      className={clsx('flex', AVATAR_SPACING[spacing], className)}
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

import clsx from 'clsx';

import { MenuProps, MenuReturnType } from '@/core/components/Menu/types';
import Popover from '@/core/components/Popover/PopoverBase';
import MenuPopoverItem from '@/core/components/Menu/MenuItem';

const Menu = ({ items, popoverOptions = {}, ...props }: MenuProps) => {
  const { className, ...rest } = popoverOptions;

  return (
    <Popover
      popover={<ul className={'flex-v-stack gap-y-1'}>{items}</ul>}
      popoverOptions={{
        backgroundColor: 'white',
        hasShadow: true,
        className: clsx('p-1.5', className),
        ...rest,
      }}
      {...props}
    />
  );
};

export default Menu as unknown as MenuReturnType;

Menu.displayName = 'Menu';
Menu.Item = MenuPopoverItem;

import { cloneElement, Fragment, MouseEvent } from 'react';
import clsx from 'clsx';

import { MenuProps, MenuReturnType } from '@/core/components/Menu/types';
import Popover from '@/core/components/Popover/PopoverBase';
import MenuPopoverItem from '@/core/components/Menu/MenuItem';

const Menu = ({
  items,
  popoverOptions = {},
  useCloseOnItemClick = true,
  className: rootClassName,
  ...props
}: MenuProps) => {
  const { className, ...rest } = popoverOptions;

  return (
    <Popover
      popover={({ close }) => (
        <ul className={clsx('flex-v-stack min-w-fit', rootClassName)}>
          {items.map((item, index) => {
            const isFunction = typeof item === 'function';
            const Item = !isFunction ? item : item({ close });

            return (
              <Fragment key={index}>
                {cloneElement(Item, {
                  onClick: (e: MouseEvent<HTMLUListElement>) => {
                    e.stopPropagation();

                    Item.props.onClick?.(e);
                    useCloseOnItemClick && !isFunction && close();
                  },
                })}
              </Fragment>
            );
          })}
        </ul>
      )}
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

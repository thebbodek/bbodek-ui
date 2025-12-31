import clsx from 'clsx';
import {
  cloneElement,
  ComponentPropsWithRef,
  forwardRef,
  isValidElement,
  Ref,
  useContext,
  useEffect,
  useRef,
} from 'react';

import {
  DropdownContextValue,
  DropdownItemProps,
  DropdownItemsProps,
} from './types';
import { DropdownContext } from '@/core/components/Dropdown/DropdownBase';
import useScrollToFocusedItemEffect from '@/core/components/Dropdown/DropdownBase/hooks/effects/useScrollToFocusedItemEffect/useScrollToFocusedItemEffect';
import useDropdownKeyboardNavigation from '@/core/components/Dropdown/DropdownBase/hooks/useDropdownKeyboardNavigation/useDropdownKeyboardNavigation';
import { SEARCH_DROPDOWN_EMPTY_ITEM_KEY } from '@/core/components/Dropdown/DropdownSearch/constants';
import InputSearch from '@/core/components/Input/InputSearch';
import VirtualList from '@/core/components/Virtual/VirtualList';
import { mergeRefs } from '@/utilities/ref';

const DropdownItems = forwardRef(
  (
    {
      rootClassName,
      className,
      items,
      useSearch,
      inputProps,
      gap,
      itemHeight = 40,
    }: DropdownItemsProps,
    ref: Ref<HTMLDivElement>,
  ) => {
    const { listboxRef } = useContext(DropdownContext) as DropdownContextValue;
    const listRef = useRef<HTMLUListElement>(null);

    const {
      focusIndex,
      setItemRef,
      onKeyDown,
      onCompositionStart,
      onCompositionEnd,
    } = useDropdownKeyboardNavigation({
      items,
    });

    const {
      rounded,
      rootClassName: inputRootClassName,
      placeholder,
      inputRef,
      ...restInputProps
    } = inputProps ?? {};

    useEffect(() => {
      if (!inputRef || !inputRef['current'] || !useSearch) return;

      inputRef.current.focus();
    }, [inputRef, useSearch]);

    useScrollToFocusedItemEffect({
      focusIndex,
      listRef,
      itemFullHeight: itemHeight + (gap ?? 0),
    });

    return (
      <div
        ref={mergeRefs(ref, listboxRef)}
        className={clsx(
          'border-gray-03 overflow-hidden rounded-lg border bg-white shadow-md',
          useSearch && 'flex-v-stack',
          rootClassName,
        )}
        role='listbox'
        tabIndex={0}
        onKeyDown={onKeyDown}
      >
        {useSearch && (
          <InputSearch
            rounded={rounded ?? 'rounded-8'}
            rootElement={'div'}
            placeholder={placeholder ?? '검색어를 입력하세요'}
            inputRef={inputRef}
            onCompositionStart={onCompositionStart}
            onCompositionEnd={onCompositionEnd}
            rootClassName={clsx(
              'border-b-gray-02 border-b p-2',
              inputRootClassName,
            )}
            {...restInputProps}
          />
        )}
        <VirtualList
          ref={listRef}
          listElement={'ul'}
          itemHeight={itemHeight}
          itemsTotalCount={items.length}
          gap={gap}
          className={clsx('overflow-x-hidden p-1 whitespace-nowrap', className)}
        >
          {({ startIndex, endIndex, getTopPosition }) =>
            items.slice(startIndex, endIndex).map((item, index) => {
              const virtualIndex = startIndex + index;
              const isFocus = virtualIndex === focusIndex;

              const isDropdownOptionItem =
                isValidElement<
                  ComponentPropsWithRef<'div'> & DropdownItemProps
                >(item) && item.key !== SEARCH_DROPDOWN_EMPTY_ITEM_KEY;

              return (
                <VirtualList.Item
                  key={item.key}
                  element='li'
                  height={itemHeight}
                  topPosition={getTopPosition({ index })}
                >
                  {isDropdownOptionItem
                    ? cloneElement(item, {
                        ref: (element) => {
                          setItemRef({ element, index: virtualIndex });
                        },
                        isFocus,
                      })
                    : item}
                </VirtualList.Item>
              );
            })
          }
        </VirtualList>
      </div>
    );
  },
);

export default DropdownItems;

DropdownItems.displayName = 'DropdownItems';

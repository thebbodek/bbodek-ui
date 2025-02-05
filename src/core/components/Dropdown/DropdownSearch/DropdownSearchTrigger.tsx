import { ChangeEvent, useContext } from 'react';
import clsx from 'clsx';

import {
  DropdownSearchTriggerProps,
  DropdownSearchValueType,
} from '@/core/components/Dropdown/DropdownSearch/types';
import { DropdownContextValue } from '@/core/components/Dropdown/DropdownBase/types';
import Typography from '@/core/components/Typography';
import DropdownBase, {
  DropdownContext,
} from '@/core/components/Dropdown/DropdownBase';
import DropdownSelectIcon from '@/core/components/Dropdown/DropdownSelect/DropdownSelectIcon';

const DropdownSearchTrigger = <T extends DropdownSearchValueType>({
  options,
  currentValue,
  className,
  placeholder,
  searchValue,
  inputRef,
  inputPlaceholder,
  error,
  updateSearchValue,
  close,
  ...props
}: DropdownSearchTriggerProps<T>) => {
  const { isToggle } = useContext(DropdownContext) as DropdownContextValue;
  const { label } =
    options.find((option) => option.value === currentValue) ?? {};
  const showPlaceholder =
    !!placeholder && (currentValue === undefined || currentValue === '');

  const onSearchValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    updateSearchValue(e.target.value);
  };

  const onToggle = () => {
    if (isToggle) {
      close();
    } else {
      inputRef.current?.focus();
    }
  };

  return (
    <DropdownBase.Trigger
      className={clsx(
        'bbodek-select',
        error ? 'border-error' : 'border-gray-03',
        className,
      )}
      onClick={onToggle}
      {...props}
    >
      {({ disabled, readOnly }) => {
        const isDisabled = readOnly || disabled;
        const isVisibleContent = !readOnly && !disabled && isToggle;
        const currentLabel = label || placeholder;
        const isString = typeof currentLabel === 'string';

        return (
          <>
            <div className='relative flex w-full flex-1 items-center'>
              {isString ? (
                <Typography
                  text={currentLabel || placeholder}
                  className={clsx(
                    'text-ellipsis-line-clamp-1',
                    !searchValue ? 'opacity-100' : 'opacity-0',
                    isDisabled && 'mr-[1.725rem]',
                  )}
                  color={
                    !isDisabled && !showPlaceholder ? 'gray-08' : 'gray-05'
                  }
                />
              ) : (
                currentLabel
              )}
              <input
                type='text'
                placeholder={
                  isToggle
                    ? isString
                      ? currentLabel || inputPlaceholder
                      : inputPlaceholder
                    : ''
                }
                className={clsx(
                  'absolute bottom-0 left-0 right-0 top-0 focus:outline-none',
                  !isToggle
                    ? 'h-0 w-[2px]'
                    : 'h-full min-h-fit w-full bg-white',
                )}
                ref={inputRef}
                value={searchValue}
                onChange={onSearchValueChange}
              />
            </div>
            {!isDisabled && (
              <DropdownSelectIcon isVisibleContent={isVisibleContent} />
            )}
          </>
        );
      }}
    </DropdownBase.Trigger>
  );
};

export default DropdownSearchTrigger;

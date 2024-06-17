import { CaretDown } from '@phosphor-icons/react';
import clsx from 'clsx';
import { forwardRef, MouseEvent, Ref, useContext } from 'react';

import Typography from '../../Typography';
import { DropdownContext } from '../DropdownBase';
import { DropdownMultipleTriggerProps, ValueWithLabelType } from './types';
import { DropdownContextValue } from '@/core/components/Dropdown/DropdownBase/types';
import { DROPDOWN_MULTIPLE_VARIANT } from '@/core/components/Dropdown/DropdownMultiple/constants';
import Chip from '@/core/components/Chip';

const DropdownMultipleTrigger = forwardRef(
  <T extends ValueWithLabelType>(
    {
      variant = DROPDOWN_MULTIPLE_VARIANT['TEXT'],
      currentValues,
      onDelete,
      onClick,
      ...props
    }: DropdownMultipleTriggerProps<T>,
    ref: Ref<HTMLDivElement>,
  ) => {
    const { isToggle, readOnly, disabled, setIsToggle } = useContext(
      DropdownContext,
    ) as DropdownContextValue;
    const { className, placeholder, ...rest } = props;
    const hasCurrentValues = currentValues.length > 0;
    const showPlaceholder = placeholder && !hasCurrentValues;
    const isDisabled = readOnly || disabled;
    const isVisibleContent = !readOnly && !disabled && isToggle;
    const isText =
      !showPlaceholder && variant === DROPDOWN_MULTIPLE_VARIANT['TEXT'];

    const onClickHandler = (e: MouseEvent<HTMLDivElement>) => {
      if (isDisabled) return;

      setIsToggle((v) => !v);
      onClick?.(e);
    };

    return (
      <div
        ref={ref}
        role={'button'}
        onClick={onClickHandler}
        className={clsx(
          'flex min-h-[3.75rem] w-full items-center justify-between gap-x-2 overflow-hidden rounded-xl border border-gray-03 p-3',
          isDisabled ? '!cursor-not-allowed bg-gray-09' : 'cursor-pointer',
          className,
        )}
        aria-haspopup='listbox'
        aria-expanded={isToggle}
        aria-disabled={disabled}
        aria-readonly={readOnly}
        {...rest}
      >
        {showPlaceholder || isText ? (
          <Typography
            theme='subhead-02-regular'
            color={!showPlaceholder && !isDisabled ? 'gray-08' : 'gray-05'}
            text={
              !showPlaceholder
                ? currentValues.map((value) => value.label).join(', ')
                : placeholder
            }
            className={clsx(
              'flex-1 truncate text-start',
              isDisabled && 'mr-[1.75rem]',
            )}
          />
        ) : (
          <ul
            className={clsx(
              'flex flex-wrap gap-2',
              isDisabled && 'mr-[1.75rem]',
            )}
          >
            {currentValues.map(({ label, value }) => (
              <Chip
                element={'li'}
                key={value}
                label={label}
                size={'medium'}
                rounded={'rounded-6'}
                colorTheme={'secondary'}
                onDelete={(e: MouseEvent<HTMLButtonElement>) => {
                  e.stopPropagation();
                  onDelete?.(value);
                }}
              />
            ))}
          </ul>
        )}
        {!isDisabled ? (
          <CaretDown
            size='24'
            className={clsx(
              'flex-shrink-0 text-gray-06',
              isVisibleContent ? 'rotate-180' : 'rotate-0',
            )}
            weight='fill'
          />
        ) : null}
      </div>
    );
  },
);

export default DropdownMultipleTrigger;

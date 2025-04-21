import clsx from 'clsx';
import { forwardRef, MouseEvent, Ref, useContext } from 'react';

import { DropdownContext } from '../DropdownBase';
import { DropdownMultipleTriggerProps, ValueWithLabelType } from './types';
import { DropdownContextValue } from '@/core/components/Dropdown/DropdownBase/types';
import { DROPDOWN_MULTIPLE_VARIANT } from '@/core/components/Dropdown/DropdownMultiple/constants';
import Chip from '@/core/components/Chip';
import DropdownSelectIcon from '@/core/components/Dropdown/DropdownSelect/DropdownSelectIcon';
import Typography from '../../Typography';

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
          'bbodek-select whitespace-nowrap',
          isDisabled
            ? 'bg-gray-09 cursor-not-allowed'
            : 'cursor-pointer bg-white',
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
            color={!showPlaceholder && !isDisabled ? 'gray-08' : 'gray-05'}
            text={
              !showPlaceholder
                ? currentValues.map((value) => value.label).join(', ')
                : placeholder
            }
            className={clsx(
              'flex-1 truncate text-start',
              isDisabled && 'mr-[1.725rem]',
            )}
          />
        ) : (
          <ul
            className={clsx(
              'flex flex-wrap gap-2',
              isDisabled && 'mr-[1.725rem]',
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
        {!isDisabled && (
          <DropdownSelectIcon isVisibleContent={isVisibleContent} />
        )}
      </div>
    );
  },
);

export default DropdownMultipleTrigger;

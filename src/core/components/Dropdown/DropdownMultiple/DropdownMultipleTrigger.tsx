import clsx from 'clsx';
import { forwardRef, MouseEvent, Ref, useContext } from 'react';

import Typography from '../../Typography';
import { DropdownContext } from '../DropdownBase';
import { DropdownMultipleTriggerProps, ValueWithLabelType } from './types';
import Chip from '@/core/components/Chip';
import { DropdownContextValue } from '@/core/components/Dropdown/DropdownBase/types';
import { DROPDOWN_MULTIPLE_VARIANT } from '@/core/components/Dropdown/DropdownMultiple/constants';
import DropdownSelectIcon from '@/core/components/Dropdown/DropdownSelect/DropdownSelectIcon';

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
    const {
      isToggle,
      readOnly: isReadOnly,
      disabled,
      setIsToggle,
    } = useContext(DropdownContext) as DropdownContextValue;
    const { className, placeholder, ...rest } = props;
    const hasCurrentValues = currentValues.length > 0;
    const showPlaceholder = placeholder && !hasCurrentValues;
    const isDisabled = isReadOnly || disabled;
    const isVisibleContent = !isReadOnly && !disabled && isToggle;
    const isText =
      !showPlaceholder && variant === DROPDOWN_MULTIPLE_VARIANT['TEXT'];

    const onClickHandler = (e: MouseEvent<HTMLDivElement>) => {
      if (isDisabled) return;

      setIsToggle((v) => !v);
      onClick?.(e);
    };

    return (
      <div
        className={clsx(
          'bbodek-select whitespace-nowrap',
          isDisabled
            ? 'bg-gray-09 cursor-not-allowed'
            : 'cursor-pointer bg-white',
          className,
        )}
        aria-disabled={disabled}
        aria-expanded={isToggle}
        aria-haspopup='listbox'
        aria-readonly={isReadOnly}
        ref={ref}
        role='button'
        onClick={onClickHandler}
        {...rest}
      >
        {showPlaceholder || isText ? (
          <Typography
            className={clsx(
              'flex-1 truncate text-start',
              isDisabled && 'mr-[1.725rem]',
            )}
            text={
              !showPlaceholder
                ? currentValues.map((value) => value.label).join(', ')
                : placeholder
            }
            color={!showPlaceholder && !isDisabled ? 'gray-08' : 'gray-05'}
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
                colorTheme='secondary'
                element='li'
                key={value}
                label={label}
                rounded='rounded-6'
                size='medium'
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

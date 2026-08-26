import clsx from 'clsx';
import { forwardRef, useId } from 'react';

import Typography from '../../Typography';
import { useInput } from '../hooks/useInput';
import InputBase from '../InputBase';
import { TEXT_AREA_HEIGHT } from './constants';
import { InputTextAreaProps } from './types';

const InputTextArea = forwardRef(
  (
    {
      labelColor,
      borderColor,
      label,
      textAreaHeight,
      regCallback,
      feedback,
      badge,
      ...props
    }: InputTextAreaProps,
    ref: React.Ref<HTMLTextAreaElement>,
  ) => {
    const id = useId();
    const {
      readOnly: isReadOnly = false,
      disabled = false,
      rootClassName,
      inputRootClassName,
      className,
      required = false,
      value,
      onChange,
      autoComplete = 'off',
      maxLength,
      error: isError = false,
      name,
      sub,
      ...rest
    } = props;
    const { inputValue, onChangeHandler } = useInput({
      value,
      regCallback,
      onChange,
      name,
    });
    const currentInputValueLength = (inputValue as string)?.length || 0;

    const onChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (maxLength && (e.target?.value ?? '').length > maxLength) return;

      onChangeHandler(e);
    };

    return (
      <InputBase
        endComponent={
          maxLength && (
            <Typography
              className='ml-auto'
              color='gray-05'
              text={`${currentInputValueLength} / ${maxLength}`}
            />
          )
        }
        inputComponent={
          <textarea
            aria-disabled={disabled}
            aria-readonly={isReadOnly}
            autoComplete={autoComplete}
            className={clsx('bbodek-field resize-none', className)}
            disabled={disabled}
            maxLength={maxLength}
            name={name}
            readOnly={isReadOnly}
            ref={ref}
            required={required}
            value={inputValue}
            onChange={onChangeTextArea}
            {...rest}
          />
        }
        inputRootClassName={clsx(
          'flex-v-stack',
          textAreaHeight && TEXT_AREA_HEIGHT[textAreaHeight],
          inputRootClassName,
        )}
        badge={badge}
        borderColor={borderColor}
        disabled={disabled}
        error={isError}
        feedback={feedback}
        inputId={id}
        label={label}
        labelColor={labelColor}
        readOnly={isReadOnly}
        required={required}
        rootClassName={rootClassName}
        sub={sub}
      />
    );
  },
);

export default InputTextArea;

import clsx from 'clsx';
import { forwardRef, useId } from 'react';

import Typography from '../../Typography';
import InputBase from '../InputBase';
import { useInput } from '../hooks/useInput';
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
      readOnly = false,
      disabled = false,
      rootClassName,
      inputRootClassName,
      className,
      required = false,
      value,
      onChange,
      autoComplete = 'off',
      maxLength,
      error = false,
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
        label={label}
        inputId={id}
        rootClassName={rootClassName}
        inputRootClassName={clsx(
          'flex-v-stack',
          textAreaHeight && TEXT_AREA_HEIGHT[textAreaHeight],
          inputRootClassName,
        )}
        feedback={feedback}
        error={error}
        badge={badge}
        readOnly={readOnly}
        disabled={disabled}
        sub={sub}
        inputComponent={
          <textarea
            ref={ref}
            className={clsx('bbodek-field w-full resize-none', className)}
            autoComplete={autoComplete}
            onChange={onChangeTextArea}
            required={required}
            value={inputValue}
            maxLength={maxLength}
            readOnly={readOnly}
            disabled={disabled}
            aria-disabled={disabled}
            aria-readonly={readOnly}
            name={name}
            {...rest}
          />
        }
        endComponent={
          maxLength && (
            <Typography
              className='ml-auto'
              color='gray-05'
              text={`${currentInputValueLength} / ${maxLength}`}
            />
          )
        }
        required={required}
        labelColor={labelColor}
        borderColor={borderColor}
      />
    );
  },
);

export default InputTextArea;

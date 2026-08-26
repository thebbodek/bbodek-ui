import clsx from 'clsx';
import { useId, useRef } from 'react';

import InputBase from '../InputBase';
import { INPUT_SEARCH_ROUNDED } from './constants';
import { InputSearchProps } from './types';
import Icon from '@/core/components/Icon';
import { useInput } from '@/core/components/Input/hooks/useInput';

const InputSearch = <T extends React.ElementType = 'form'>({
  formSubmitHandler,
  regCallback,
  feedback,
  rounded,
  rootElement,
  badge,
  inputRef,
  ...props
}: InputSearchProps<T> & React.ComponentPropsWithoutRef<'input'>) => {
  const id = useId();
  const rootRef = useRef<T | null>(null);
  const {
    readOnly: isReadOnly = false,
    disabled = false,
    rootClassName,
    className,
    value,
    onChange,
    autoComplete = 'off',
    error: isError = false,
    name,
    sub,
    ...rest
  } = props;
  const { inputValue, onChangeHandler, onResetInputValue } = useInput({
    value,
    regCallback,
    onChange,
    name,
  });

  const el = rootRef.current;
  const isForm = (rootElement || 'form') === 'form';

  const endComponent = () => {
    const SearchIcon = (
      <Icon
        className='text-gray-05 text-[1.25rem]'
        iconKey='magnifying-glass'
      />
    );

    if (isForm) {
      return (
        <button aria-label='검색하기' className='h-5 w-5' type='submit'>
          {SearchIcon}
        </button>
      );
    }

    return <div className='h-5 w-5'>{SearchIcon}</div>;
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    if (!isForm) return;

    e.preventDefault();

    if (!formSubmitHandler) return;

    const element = el as unknown as HTMLFormElement;

    element.reset();

    onResetInputValue();
    formSubmitHandler(e);
  };

  return (
    <InputBase
      inputComponent={
        <input
          aria-disabled={disabled}
          aria-readonly={isReadOnly}
          autoComplete={autoComplete}
          className={clsx('bbodek-field', className)}
          disabled={disabled}
          id={id}
          name={name}
          readOnly={isReadOnly}
          ref={inputRef}
          type='text'
          value={inputValue}
          required
          onChange={onChangeHandler}
          {...rest}
        />
      }
      inputRootClassName={clsx(
        'border-gray-02 text-body-02-medium flex items-center overflow-hidden border bg-white py-2',
        INPUT_SEARCH_ROUNDED[rounded],
      )}
      badge={badge}
      disabled={disabled}
      element={rootElement ?? 'form'}
      endComponent={endComponent()}
      error={isError}
      feedback={feedback}
      inputId={id}
      readOnly={isReadOnly}
      ref={rootRef}
      rootClassName={rootClassName}
      sub={sub}
      onSubmit={isForm ? onSubmitHandler : undefined}
    />
  );
};

InputSearch.displayName = 'InputSearch';

export default InputSearch;

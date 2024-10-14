import { MagnifyingGlass } from '@phosphor-icons/react';
import clsx from 'clsx';
import { useId, useRef } from 'react';

import { useInput } from '@/core/components/Input/hooks/useInput';
import InputBase from '../InputBase';
import { INPUT_SEARCH_ROUNDED } from './constants';
import { InputSearchProps } from './types';

const InputSearch = <T extends React.ElementType = 'form'>({
  formSubmitHandler,
  regCallback,
  feedback,
  rounded,
  rootElement,
  ...props
}: InputSearchProps<T> & React.ComponentPropsWithoutRef<'input'>) => {
  const id = useId();
  const rootRef = useRef<T | null>(null);
  const {
    readOnly = false,
    disabled = false,
    rootClassName,
    className,
    value,
    onChange,
    autoComplete = 'off',
    error = false,
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
  const SearchIcon = <MagnifyingGlass size='100%' className='text-gray-05' />;
  const el = rootRef.current;
  const isForm = (rootElement || 'form') === 'form';

  const endComponent = () => {
    if (isForm) {
      return (
        <button className='h-5 w-5' type='submit' aria-label='검색하기'>
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
      inputId={id}
      element={rootElement ?? 'form'}
      ref={rootRef}
      error={error}
      feedback={feedback}
      readOnly={readOnly}
      disabled={disabled}
      rootClassName={rootClassName}
      inputRootClassName={clsx(
        'flex items-center overflow-hidden border border-gray-02 bg-white py-2 text-body-02-medium',
        INPUT_SEARCH_ROUNDED[rounded],
      )}
      onSubmit={isForm ? onSubmitHandler : undefined}
      sub={sub}
      inputComponent={
        <input
          id={id}
          className={clsx('bbodek-field', className)}
          type='text'
          value={inputValue}
          onChange={onChangeHandler}
          autoComplete={autoComplete}
          readOnly={readOnly}
          disabled={disabled}
          aria-disabled={disabled}
          aria-readonly={readOnly}
          name={name}
          required
          {...rest}
        />
      }
      endComponent={endComponent()}
    />
  );
};

InputSearch.displayName = 'InputSearch';

export default InputSearch;

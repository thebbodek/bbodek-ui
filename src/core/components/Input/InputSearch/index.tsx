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

  const el = rootRef.current;
  const isForm = (rootElement || 'form') === 'form';

  const endComponent = () => {
    const SearchIcon = (
      <Icon
        iconKey={'magnifying-glass'}
        className='text-gray-05 text-[1.25rem]'
      />
    );

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
      badge={badge}
      inputRootClassName={clsx(
        'border-gray-02 text-body-02-medium flex items-center overflow-hidden border bg-white py-2',
        INPUT_SEARCH_ROUNDED[rounded],
      )}
      onSubmit={isForm ? onSubmitHandler : undefined}
      sub={sub}
      inputComponent={
        <input
          ref={inputRef}
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

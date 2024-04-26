import { MagnifyingGlass } from "@phosphor-icons/react";
import clsx from "clsx";
import { useId, useRef } from "react";

import { useInput } from "@/core/components/Input/hooks/useInput";
import InputBase from "../InputBase";
import { INPUT_SEARCH_ROUNDED } from "./constants";
import { InputSearchProps } from "./types";

const InputSearch = <T extends React.ElementType = "form">(
    {
      formSubmitHandler,
      regCallback,
      feedback,
      rounded,
      rootElement,
      ...props
    }: InputSearchProps<T> & React.ComponentPropsWithoutRef<"input">,
  ) => {
  const id = useId();
  const rootRef = useRef<T | null>(null);
  const { readOnly = false, disabled = false, rootClassName, className, value, onChange, autoComplete = "off", error = false, name, ...rest } = props;
  const { inputValue, onChangeHandler, onResetInputValue } = useInput({ value, regCallback, onChange, name });
  const SearchIcon = <MagnifyingGlass size = "100%" className = "text-gray-05"/>;

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const el = rootRef.current;

    if(!formSubmitHandler) return;

    if (el instanceof HTMLFormElement) {
      el.reset();
    }

    onResetInputValue();
    formSubmitHandler(e);
  };

  return (
    <InputBase
      inputId = {id}
      element = {rootElement ?? "form"}
      ref = {rootRef}
      error = {error}
      feedback = {feedback}
      readOnly = {readOnly}
      disabled = {disabled}
      rootClassName = {rootClassName}
      inputRootClassName = {clsx(
        "flex items-center py-2 text-body-02-medium bg-white overflow-hidden border border-gray-02",
        INPUT_SEARCH_ROUNDED[rounded],
      )}
      onSubmit = {onSubmitHandler}
      inputComponent = {
        <input
          id = {id}
          className = {clsx("bbodek-field", className)}
          type = "text"
          value = {inputValue}
          onChange = {onChangeHandler}
          autoComplete = {autoComplete}
          readOnly = {readOnly}
          disabled = {disabled}
          aria-disabled = {disabled}
          aria-readonly = {readOnly}
          name = {name}
          required
          {...rest}
        />
      }
      endComponent = {
        <button className = "w-5 h-5" type = "submit" aria-label = "검색하기">
          {SearchIcon}
        </button>
      }
    />
  );
};

InputSearch.displayName = "InputSearch";

export default InputSearch;

import clsx from "clsx";
import { forwardRef, useId, useRef } from "react";

import { useInput } from "@/core/components/Input/hooks/useInput";
import { MagnifyingGlass } from "@phosphor-icons/react";
import InputBase from "../InputBase";
import { InputSearchProps } from "./types";

const InputSearch = forwardRef((
    {
      formSubmitHandler,
      regCallback,
      feedback,
      ...props
    }: InputSearchProps,
    ref: React.ComponentPropsWithRef<"input">["ref"],
  ) => {
  const id = useId();
  const formRef = useRef<HTMLFormElement | null>(null);
  const { readOnly = false, disabled = false, rootClassName, className, value, onChange, autoComplete = "off", error = false, name, ...rest } = props;
  const { inputValue, onChangeHandler, onResetInputValue } = useInput({ value, regCallback, onChange, name });
  const SearchIcon = <MagnifyingGlass size = "100%" fill = "#A9B2C7"/>;

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(!formSubmitHandler) return;

    formRef.current?.reset();
    onResetInputValue();
    formSubmitHandler(e);
  };

  return (
    <InputBase
      inputId = {id}
      element = {"form"}
      ref = {formRef}
      error = {error}
      feedback = {feedback}
      readOnly = {readOnly}
      disabled = {disabled}
      rootClassName = {rootClassName}
      inputRootClassName = {"flex items-center px-6 py-2 text-body-02-medium bg-white rounded-full overflow-hidden border border-gray-02"}
      onSubmit = {onSubmitHandler}
      inputComponent = {
        <input
          ref = {ref}
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
});

InputSearch.displayName = "InputSearch";

export default InputSearch;

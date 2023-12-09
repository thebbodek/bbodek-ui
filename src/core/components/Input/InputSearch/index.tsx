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
      ...props
    }: InputSearchProps,
    ref: React.ComponentPropsWithRef<"input">["ref"],
  ) => {
  const id = useId();
  const formRef = useRef<HTMLFormElement | null>(null);
  const { rootClassName, className, value, onChange, autoComplete = "off", error, ...rest } = props;
  const { inputValue, onChangeHandler, onResetInputValue } = useInput({ value, regCallback, onChange });
  const SearchIcon = <MagnifyingGlass size = "100%" fill = "#A9B2C7"/>;

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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

import clsx from "clsx";
import { forwardRef, useId, useState } from "react";

import { useInput } from "@/core/components/Input/hooks/useInput";
import { Eye, EyeSlash } from "@phosphor-icons/react";
import InputBase from "../InputBase";
import { InputPasswordProps } from "./types";

const InputPassword = forwardRef((
    {
      regCallback,
      ...props
    }: InputPasswordProps,
    ref: React.ComponentPropsWithRef<"input">["ref"],
  ) => {
  const id = useId();
  const [ showPassword, setShowPassword ] = useState(false);
  const { rootClassName, className, required, value, onChange, autoComplete = "off", ...rest } = props;
  const { inputValue, onChangeHandler } = useInput({ value, regCallback, onChange });
  const ShowPasswordIcon = <Eye size = {"100%"} weight = "fill" fill = "#A9B2C7"/>;
  const HidePasswordIcon = <EyeSlash size = {"100%"} weight = "fill" fill = "#A9B2C7"/>;

  const onToggleShowPassword = () => setShowPassword(v => !v);

  return (
    <InputBase
      inputId = {id}
      label = {"비밀번호"}
      rootClassName = {rootClassName}
      inputComponent = {
        <input
          ref = {ref}
          id = {id}
          className = {clsx("bbodek-field", className)}
          type = {showPassword ? "text" : "password"}
          required = {required}
          value = {inputValue}
          onChange = {onChangeHandler}
          autoComplete = {autoComplete}
          placeholder = {"********"}
          {...rest}
        />
      }
      endComponent = {
        <button
          className = "w-6 h-6"
          onClick = {onToggleShowPassword}
          aria-label = {showPassword ? "비밀번호 숨기기" : "비밀번호 보이기"}
        >
          {showPassword ? HidePasswordIcon : ShowPasswordIcon}
        </button>
      }
      labelColor = {"gray-06"}
      borderColor = {"gray-04"}
    />
  );
});

InputPassword.displayName = "InputPassword";

export default InputPassword;

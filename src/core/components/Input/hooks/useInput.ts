import { InputHTMLAttributes, useCallback, useState } from "react";

import useValueChangeEffect from "./effects/useValueChangeEffect";

export interface UseInputProps {
  value: InputHTMLAttributes<HTMLInputElement>["value"];
  regCallback?: (v: string) => string;
  onChange: InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>["onChange"];
}

export const useInput = ({ value, regCallback, onChange }: UseInputProps) => {
  const [ inputValue, setInputValue ] = useState<UseInputProps["value"]>(value ?? "");

  const onChangeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.value = regCallback
      ? regCallback(e.target.value)
      : e.target.value;
    setInputValue(e.target.value);
    onChange?.(e);
  }, [ regCallback, onChange ]);

  const onResetInputValue = () => setInputValue("");

  useValueChangeEffect(value, setInputValue);

  return { inputValue, setInputValue, onChangeHandler, onResetInputValue };
};

import { InputHTMLAttributes, useCallback, useState } from "react";

import useValueChangeEffect from "./effects/useValueChangeEffect";

export interface UseInputProps {
  value: InputHTMLAttributes<HTMLInputElement>["value"];
  name: InputHTMLAttributes<HTMLInputElement>["name"];
  regCallback?: (v: string) => string;
  onChange: InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>["onChange"];
}

export const useInput = ({ value, regCallback, onChange, name }: UseInputProps) => {
  const [ inputValue, setInputValue ] = useState<UseInputProps["value"]>(value ?? "");

  const onChangeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.value = regCallback
      ? regCallback(e.target.value)
      : e.target.value;
    setInputValue(e.target.value);
    onChange?.(e);
  }, [ regCallback, onChange ]);

  const onResetInputValue = () => {
    setInputValue("");

    const event = {
      target: { value: "", name },
      currentTarget: { value: "", name },
    } as unknown as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

    onChange?.(event);
  };

  useValueChangeEffect(value, setInputValue);

  return { inputValue, setInputValue, onChangeHandler, onResetInputValue };
};

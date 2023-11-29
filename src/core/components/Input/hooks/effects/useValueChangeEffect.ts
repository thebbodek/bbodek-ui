import { Dispatch, SetStateAction, useEffect } from "react";
import { UseInputProps } from "../useInput";

const useValueChangeEffect = (value: UseInputProps["value"], setInputValue: Dispatch<SetStateAction<UseInputProps["value"]>>) => {
  useEffect(() => {
    setInputValue(value);
  }, [ value, setInputValue ]);
};

export default useValueChangeEffect;

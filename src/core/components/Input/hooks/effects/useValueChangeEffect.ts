import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { UseInputProps } from "../useInput";

const useValueChangeEffect = (value: UseInputProps["value"], setInputValue: Dispatch<SetStateAction<UseInputProps["value"]>>) => {
  const isFirst = useRef(true);

  useEffect(() => {
    if (!isFirst.current) {
      return setInputValue(value);
    }

    isFirst.current = false;
  }, [ value, setInputValue, isFirst.current ]);
};

export default useValueChangeEffect;


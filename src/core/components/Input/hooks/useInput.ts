import { InputHTMLAttributes, useState } from 'react';

import useValueChangeEffect from './effects/useValueChangeEffect';

export interface UseInputProps {
  value: InputHTMLAttributes<HTMLInputElement>['value'];
  name: InputHTMLAttributes<HTMLInputElement>['name'];
  regCallback?: (v: string) => string;
  onChange: InputHTMLAttributes<
    HTMLInputElement | HTMLTextAreaElement
  >['onChange'];
}

export const useInput = ({
  value,
  regCallback,
  onChange,
  name,
}: UseInputProps) => {
  const [inputType, setInputType] = useState<HTMLInputElement['type']>('text');
  const [inputValue, setInputValue] = useState<UseInputProps['value']>(
    value ?? '',
  );

  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { type, value: eventTargetValue } = e.target;
    const eventType = type;
    const isDifferenceType = type !== inputType;

    if (isDifferenceType) {
      setInputType(eventType);
    }

    e.target.value = regCallback
      ? regCallback(eventTargetValue)
      : e.target.value;
    setInputValue(e.target.value);
    onChange?.(e);
  };

  const onResetInputValue = () => {
    const isNumberType = inputType === 'number';
    setInputValue(!isNumberType ? '' : '0');

    const event = {
      target: { value: '', name },
      currentTarget: { value: '', name },
    } as unknown as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

    onChange?.(event);
  };

  useValueChangeEffect(value, setInputValue);

  return { inputValue, setInputValue, onChangeHandler, onResetInputValue };
};

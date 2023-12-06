import { Meta } from "@storybook/react";
import { useState } from "react";

import InputSelect from "./index";
import { InputSelectProps } from "./types";

const meta = {
  title: "core/Input/InputSelect",
  component: InputSelect,
  argTypes: {
    label: {
      control: "text",
      description: "InputSelect Label",
    },
    placeholder: {
      control: "text",
      description: "InputSelect Placeholder",
    },
    options: {
      description: "InputSelect options",
    },
  },
} satisfies Meta<typeof InputSelect>;

export default meta;

export const Default = (props: InputSelectProps) => {
  const [ currentValue, setCurrentValue ] = useState("");
  const data = [ "초밥", "피자", "치킨" ];
  const options = data.map(food => <option key = {food} value = {food}>{food}</option>);
  const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentValue(e.target.value);
  };

  return (
    <InputSelect
      className = {"w-[30rem]"}
      label = {props.label ?? "레이블"}
      placeholder = {props.placeholder ?? "메뉴 선택"}
      options = {options}
      value = {currentValue}
      onChange = {onChangeHandler}
    />
  );
};

import { Meta } from "@storybook/react";
import { useState } from "react";

import { TextAreaSizeOptions } from "./constants";
import InputTextArea from "./index";
import { InputTextAreaProps } from "./types";

const meta = {
  title: "core/Input/InputTextArea",
  component: InputTextArea,
  argTypes: {
    label: {
      control: "text",
      description: "InputTextArea Label",
    },
    textAreaHeight: {
      control: "select",
      options: TextAreaSizeOptions,
      description: "InputTextArea Height",
    },
    maxLength: {
      control: "number",
      description: "InputTextArea Max Length",
    },
    regCallback: {
      description: "Input RegEx",
    },
  },
} satisfies Meta<typeof InputTextArea>;

export default meta;

export const Default = (props: InputTextAreaProps) => {
  const { label, maxLength, textAreaHeight, ...rest } = props;
  const [ currentValue, setCurrentValue ] = useState("");
  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => setCurrentValue(e.target.value);

  return (
    <div className = "w-[30rem]">
      <InputTextArea
        label = {label}
        onChange = {onChangeHandler}
        value = {currentValue}
        placeholder = "검색하기"
        maxLength = {maxLength ?? 150}
        textAreaHeight = {textAreaHeight ?? "h-213"}
        {...rest}
      />
    </div>
  );
};

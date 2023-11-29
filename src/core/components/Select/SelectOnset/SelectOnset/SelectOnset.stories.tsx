import { Meta } from "@storybook/react";
import { ChangeEvent, useState } from "react";

import { SelectOnsetOptions } from "./constants";
import SelectOnset from "./index";

const meta = {
  title: "core/Select/SelectOnset/SelectOnset",
  component: SelectOnset,
  argTypes: {
    variants: {
      control: "select",
      options: SelectOnsetOptions,
      description: "SelectOnset Variants",
    },
  },
} satisfies Meta<typeof SelectOnset>;

export default meta;

export const Vertical = () => {
  const [ currentOnset, setCurrentOnset ] = useState("ㄱ");

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setCurrentOnset(e.target.value);

  return (
    <SelectOnset
      onChange = {onChangeHandler}
      currentOnset = {currentOnset}
      variants = {"vertical"}
    />
  );
};

export const Horizontal = () => {
  const [ currentOnset, setCurrentOnset ] = useState("ㄱ");

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setCurrentOnset(e.target.value);

  return (
    <SelectOnset
      onChange = {onChangeHandler}
      currentOnset = {currentOnset}
      variants = {"horizontal"}
    />
  );
};

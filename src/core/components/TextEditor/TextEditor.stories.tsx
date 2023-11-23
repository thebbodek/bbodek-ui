import React from "react";
import { Meta } from "@storybook/react";

import TextEditor from "@/core/components/TextEditor/index";

const meta = {
  title: "TextEditor",
  component: TextEditor,
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: "select",
      options: [ "Small", "Large" ],
    },
  },
} satisfies Meta<typeof TextEditor>;
export default meta;

export const SmallTextEditor = () => {
  const [ value, setValue ] = React.useState("");
  return(
    <div className = {"w-[500px] h-[200px]"}>
      <TextEditor
        value = {value}
        onChange = {setValue}
      />
    </div>
  );
};

export const LargeTextEditor = () => {
  const [ value, setValue ] = React.useState("");
  return(
    <div className = {"w-[500px] h-[500px]"}>
      <TextEditor
        value = {value}
        onChange = {setValue}
      />
    </div>
  );
};

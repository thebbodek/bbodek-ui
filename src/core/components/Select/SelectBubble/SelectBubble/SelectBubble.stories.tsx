import { Meta } from "@storybook/react";
import { useState } from "react";

import SelectBubble from "./index";

const meta = {
  title: "core/Select/SelectBubble/SelectBubble",
  component: SelectBubble,
  argTypes: {},
} satisfies Meta<typeof SelectBubble>;

export default meta;

export const Default = () => {
  const [ currentValue, setCurrentValue ] = useState("A");
  const data = [
    { key: "A", label: "A반" },
    { key: "B", label: "B반" },
    { key: "C", label: "C반" },
  ];

  const items = data.map(item => (
    <SelectBubble.Item
      label = {item.label}
      name = {"class"}
      checked = {item.key === currentValue}
      value = {item.key}
      onChange = {(e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;

        setCurrentValue(value);
      }}
    />
  ));

  return (
    <div className = "w-[60rem]">
      <SelectBubble label = "품목 선택" labelSubText = "반별로 품목과 수량을 각각 선택해주세요." items = {items} required/>
    </div>
  );
};

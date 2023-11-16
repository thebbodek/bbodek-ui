import { Meta } from "@storybook/react";
import { useState } from "react";

import TableTab from "./index";

const meta = {
  title: "core/Tab/TableTab/TableTab",
  component: TableTab,
  argTypes: {},
} satisfies Meta<typeof TableTab>;

export default meta;

export const Default = () => {
  const [ currentValue, setCurrentValue ] = useState("dish");
  const data = [
    { key: "dish", label: "식기" },
    { key: "snack", label: "간식기" },
  ];

  const items = data.map(item => (
    <TableTab.Item
      label = {item.label}
      name = {"plate"}
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
      <TableTab items = {items}/>
    </div>
  );
};

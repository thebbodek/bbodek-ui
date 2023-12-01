import { Meta } from "@storybook/react";
import { useState } from "react";

import DropdownFilter from "../DropdownFilter";

const meta = {
  title: "core/Dropdown/DropdownFilter",
  component: DropdownFilter,
  argTypes: {},
} satisfies Meta<typeof DropdownFilter>;

export default meta;

export const Default = () => {
  const [ currentValue, setCurrentValue ] = useState("");
  const data = [ "학부모", "교육기관", "둘다" ];

  const items = data.map((item, idx) => (
    <DropdownFilter.Item
      key = {idx}
      checked = {item === currentValue}
      onClick = {() => setCurrentValue(item)}
    >
      {item}
    </DropdownFilter.Item>
  ));

  return (
    <DropdownFilter
      trigger = {<DropdownFilter.Trigger className = "w-[10rem]" currentValue = {currentValue || "선택해주세요"}/>}
      content = {
        <DropdownFilter.Items
          className = "top-[1.31rem]"
          items = {items}
       />
      }
    />
  );
};

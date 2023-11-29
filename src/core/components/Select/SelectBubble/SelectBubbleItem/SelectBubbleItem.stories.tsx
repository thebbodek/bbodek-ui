import { Meta } from "@storybook/react";

import SelectBubble from "../SelectBubble";
import SelectBubbleItem from "./index";
import { SelectButtonItemProps } from "./types";

const meta = {
  title: "core/Select/SelectBubble/SelectBubbleItem",
  component: SelectBubbleItem,
  argTypes: {
    label: {
      control: "text",
      description: "Bubble Label",
    },
  },
} satisfies Meta<typeof SelectBubbleItem>;

export default meta;

export const Default = (props: SelectButtonItemProps) => {
  const { label, ...rest } = props;

  return (
    <ul>
      <SelectBubble.Item label = {label ?? "A반"} {...rest} />
    </ul>
  );
};

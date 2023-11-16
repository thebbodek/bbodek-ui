import { Meta } from "@storybook/react";

import GeneralTabItem from "./index";
import { GeneralTabItemProps } from "./types";

const meta = {
  title: "core/Tab/GeneralTab/GeneralTabItem",
  component: GeneralTabItem,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  argTypes: {
    label: {
      control: "text",
      description: "Tab Label",
    },
  },
} satisfies Meta<typeof GeneralTabItem>;

export default meta;

export const Default = (props: GeneralTabItemProps) => {
  const { label, ...rest } = props;

  return (
    <ul>
      <GeneralTabItem label = {label ?? "실제 반명"} {...rest} />
    </ul>
  );
};

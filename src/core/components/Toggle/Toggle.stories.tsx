import { Meta } from "@storybook/react";

import Toggle from "../Toggle/index";
import { ToggleProps } from "./types";

const meta = {
    title: "core/Toggle",
    component: Toggle,
    tags: ["autodocs"],
    argTypes: {
      label: {
          control: "text",
          description: "Toggle Label",
        },
        className: {
          control: "text",
          description: "Toggle ClassName",
        },
        checked: {
          control: "boolean",
          description: "Toggle Checked",
        },
        reverse: {
          control: "boolean",
          description: "Toggle Reverse",
        },
        disabled: {
          control: "boolean",
          description: "Toggle Disabled",
        },
    },
} satisfies Meta<typeof Toggle>;

export default meta;

export const Default = (props: ToggleProps) => {
  const { label, ...rest } = props;

  return <Toggle label = {label || "토글"} {...rest}/>;
};

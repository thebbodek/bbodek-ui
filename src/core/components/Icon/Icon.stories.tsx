import { Meta } from "@storybook/react";

import Icon from "./index";
import { IconProps } from "./types";

const meta = {
  title: "core/Icon",
  component: Icon,
  argTypes: {
    iconKey: {
      control: "text",
      description: "Phosphor Icons icon name",
    },
    size: {
      control: "text",
      description: "Phosphor Icons icon size",
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;

export const Default = (props: IconProps) => {
  return <Icon iconKey = {props.iconKey ?? "Airplane"} size = {props.size}/>;
};

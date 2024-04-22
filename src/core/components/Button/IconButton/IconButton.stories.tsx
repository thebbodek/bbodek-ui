import { Meta } from "@storybook/react";

import { TypographyOptions } from "@/constants";
import { ColorOptions } from "@/constants/color";
import { ROUNDED, SIZE } from "../ButtonBase/constants";
import { default as IconButton } from "./index";
import { IconButtonProps } from "./types";

const meta = {
  title: "core/Button/IconButton",
  component: IconButton,
  argTypes: {
    theme: {
      control: "select",
      options: TypographyOptions,
      description: "Button Typography Theme",
    },
    color: {
      control: "select",
      options: ColorOptions,
      description: "Button Typography Color",
    },
    backgroundColor: {
      control: "select",
      options: ColorOptions,
      defaultValue: "gray-08",
      description: "Button Background Color",
    },
    size: {
      control: "select",
      options: Object.keys(SIZE).map(size => SIZE[size as keyof typeof SIZE]),
      description: "Button Size",
    },
    rounded: {
      control: "select",
      options: Object.keys(ROUNDED).map(rounded => ROUNDED[rounded as keyof typeof ROUNDED]),
      description: "Button Size",
    },
    borderColor: {
      control: "select",
      options: [ "gray-04", "gray-03", "gray-02", "gray-01" ],
      description: "Button Size",
    },

    content: {
      control: "text",
      description: "Button Text",
    },
    disabled: {
      control: "boolean",
      description: "Button With disabled",
    },
  },
} satisfies Meta<typeof IconButton>;

export default meta;

export const Default = (props: IconButtonProps) => {
  const { theme, color, backgroundColor, size, icon, ...rest } = props;

  return (
    <IconButton
      theme = {theme}
      color = {color ?? "white"}
      backgroundColor = {backgroundColor ?? "primary-03"}
      size = {size ?? SIZE["SIZE_48"]}
      icon = {icon ?? "아이콘"}
      { ...rest }
    />
  );
};

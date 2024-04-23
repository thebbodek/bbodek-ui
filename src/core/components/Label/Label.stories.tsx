import { Meta } from "@storybook/react";

import { colorThemeOptions } from "@/constants/theme";
import { Info } from "@phosphor-icons/react";
import Label from "./index";
import { LabelProps } from "./types";

const meta = {
  title: "core/Label",
  component: Label,
  argTypes: {
    colorTheme: {
      control: "select",
      options: colorThemeOptions,
      description: "Label colorTheme",
    },
    size: {
      control: "select",
      options: [ "small", "medium", "large" ],
      description: "Label Size",
    },
    label: {
      control: "text",
      description: "Label Text",
    },
  },
} satisfies Meta<typeof Label>;

export default meta;

export const Primary = (props: LabelProps) => {
  return (
    <Label
      element = "dt"
      colorTheme = {props.colorTheme ?? "primary"}
      size = "small"
      label = {props.label ?? "label"}
      icon = {<Info />}
    />
  );
};

export const Error = (props: LabelProps) => {
  return (
    <Label
      colorTheme = {props.colorTheme ?? "error"}
      size = "medium"
      label = {props.label ?? "label"}
      icon = {<Info />}
    />
  );
};

export const Success = (props: LabelProps) => {
  return (
    <Label
      colorTheme = {props.colorTheme ?? "success"}
      size = "large"
      label = {props.label ?? "label"}
      icon = {<Info />}
    />
  );
};

export const Warning = (props: LabelProps) => {
  return (
    <Label
      colorTheme = {props.colorTheme ?? "warning"}
      size = "small"
      label = {props.label ?? "label"}
    />
  );
};

export const Secondary = (props: LabelProps) => {
  return (
    <Label
      colorTheme = {props.colorTheme ?? "secondary"}
      size = "small"
      label = {props.label ?? "label"}
    />
  );
};

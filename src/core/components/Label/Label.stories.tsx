import { Meta } from "@storybook/react";

import { Info } from "@phosphor-icons/react";
import Label from "./index";
import { LabelProps } from "./types";

const meta = {
  title: "core/Label",
  component: Label,
  argTypes: {
    variants: {
      control: "select",
      options: [ "primary", "error", "border" ],
      description: "Label Variants",
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
      variants = {props.variants ?? "primary"}
      size = "small"
      label = {props.label ?? "label"}
      icon = {<Info />}
    />
  );
};

export const Error = (props: LabelProps) => {
  return (
    <Label
      variants = {props.variants ?? "error"}
      size = "medium"
      label = {props.label ?? "label"}
      icon = {<Info />}
    />
  );
};

export const Success = (props: LabelProps) => {
  return (
    <Label
      variants = {props.variants ?? "success"}
      size = "large"
      label = {props.label ?? "label"}
      icon = {<Info />}
    />
  );
};

export const Warning = (props: LabelProps) => {
  return (
    <Label
      variants = {props.variants ?? "warning"}
      size = "small"
      label = {props.label ?? "label"}
    />
  );
};

export const Secondary = (props: LabelProps) => {
  return (
    <Label
      variants = {props.variants ?? "secondary"}
      size = "small"
      label = {props.label ?? "label"}
    />
  );
};

import { Meta } from "@storybook/react";

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
    height: {
      control: "select",
      options: [ "h-44", "h-40", "h-29" ],
      description: "Label Height",
    },
    theme: {
      control: "select",
      options: [ "body-01-bold", "body-02-bold" ],
      description: "Label Typography Theme",
    },
    rounded: {
      control: "select",
      options: [ "rounded-12", "rounded-8" ],
      description: "Label Rounded Size",
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
      variants = {props.variants ?? "primary"}
      height = {props.height ?? "h-44"}
      rounded = {props.rounded ?? "rounded-12"}
      label = {props.label ?? "Label"}
      theme = {props.theme ?? "body-01-bold"}
      className = "w-[15rem]"
    />
  );
};

export const Error = (props: LabelProps) => {
  return (
    <Label
      variants = {props.variants ?? "error"}
      height = {props.height ?? "h-44"}
      rounded = {props.rounded ?? "rounded-12"}
      label = {props.label ?? "Label"}
      theme = {props.theme ?? "body-01-bold"}
      className = "w-[15rem]"
    />
  );
};

export const Border = (props: LabelProps) => {
  return (
    <Label
      variants = {props.variants ?? "border"}
      height = {props.height ?? "h-44"}
      rounded = {props.rounded ?? "rounded-12"}
      label = {props.label ?? "Label"}
      theme = {props.theme ?? "body-01-bold"}
      className = "w-[15rem]"
    />
  );
};

import { Meta } from "@storybook/react";

import { ColorOptions } from "@/constants/color";
import { default as FormLabel } from "./index";
import { FormLabelProps } from "./types";

const meta = {
  title: "core/FormLabel",
  component: FormLabel,
  argTypes: {
    label: {
      control: "text",
      description: "FormLabel test",
    },
    required: {
      control: "boolean",
      description: "Form Required",
    },
    labelColor: {
      control: "select",
      options: ColorOptions,
      defaultValue: "gray-04",
      description: "Bbodek DesignSystem Colors",
    },
    feedback: {
      control: "text",
      description: "Form Feedback",
    },
  },
} satisfies Meta<typeof FormLabel>;

export default meta;

export const Default = (props: FormLabelProps) => {
  return (
    <FormLabel
      label = {props.label ?? "품목 선택"}
      required = {props.required ?? true}
      labelColor = {props.labelColor}
      feedback = {props.feedback ?? "반별로 품목과 수량을 각각 선택해주세요."}
    />
  );
};

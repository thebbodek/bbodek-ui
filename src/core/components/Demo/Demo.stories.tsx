import { Meta } from "@storybook/react";
import Demo from "./index";

const meta = {
  title: "core/Demo",
  component: Demo,
  argTypes: {},
} satisfies Meta<typeof Demo>;

export default meta;

export const Default = {
  args: {},
};

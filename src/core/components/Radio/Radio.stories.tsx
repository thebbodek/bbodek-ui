import { Meta } from "@storybook/react";

import Radio from "./index";
import { RadioProps } from "./types";

const meta = {
  title: "core/Radio",
  component: Radio,
  argTypes: {
    label: {
      control: "text",
      description: "Radio Label",
    },
    svgSize: {
      control: "select",
      options: [
        "24", "32",
      ],
      defaultValue: "24",
      description: "Radio Icon Size",
    },
  },
} satisfies Meta<typeof Radio>;

export default meta;

export const Default = (props: RadioProps) => {
  return <Radio {...props} />;
};


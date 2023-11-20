import { Meta } from "@storybook/react";

import Divider from "@/core/components/Divider/index";

const meta = {
  title: "core/Divider",
  component: Divider,
  tags: ["autodocs"],
} satisfies Meta<typeof Divider>;

export default meta;

export const Primary = () => {
  return (
    <div className = {"w-96 px-2"}>
      <Divider/>
    </div>
  );
};

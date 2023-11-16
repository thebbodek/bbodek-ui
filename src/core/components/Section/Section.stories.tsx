import { Meta } from "@storybook/react";

import Section from "./index";
import { SectionProps } from "./types";

const meta = {
  title: "core/Section",
  component: Section,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  argTypes: {
    hasBorder: {
      control: "boolean",
      description: "Controls whether the component has a border",
    },
    hasShadow: {
      control: "boolean",
      description: "Controls whether the component has a Box Shadow",
    },
  },
} satisfies Meta<typeof Section>;

export default meta;

export const Default = (props: SectionProps<"section">) => {
  return (
    <div className = "w-[400px] h-[300px]">
      <Section {...props}>
        section
      </Section>
    </div>
    );
};

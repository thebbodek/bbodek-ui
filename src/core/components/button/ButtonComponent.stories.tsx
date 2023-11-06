import { Meta } from "@storybook/react";

import { ButtonComponent } from "@/core/components/button/ButtonComponent";
import { BackgroundColors, BorderColors, TextColors } from "@/core/components/button/ButtonComponentTypes";

const Icon = () => (
  <div style = {{ width: "24px", height: "26px" }}>
    <img style = {{ height: "100%" }} src = "/public/trash.png" alt = "" />
  </div>
);

const meta = {
  title: "core/Button",
  component: ButtonComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: {
      options: [
        BackgroundColors.PRIMARY,
        BackgroundColors.SECONDARY,
        BackgroundColors.DANGER,
        BackgroundColors.GRAY,
        BackgroundColors.WHITE,
      ],
      control: {
        type: "radio",
      },
    },
    textColor: {
      options: [
        TextColors.PRIMARY,
        TextColors.DANGER,
        TextColors.WHITE,
        TextColors.GRAY,
      ],
      control: {
        type: "radio",
      },
    },
    borderColor: {
      options: [
        BorderColors.GRAY,
        BorderColors.LIGHTGRAY,
      ],
      control: {
        type: "radio",
      },
    },
    leftIcon: {
      control: {
        type: "boolean",
      },
      mapping: {
        false: "",
        true: <Icon />,
      },
    },
    rightIcon: {
      control: {
        type: "boolean",
      },
      mapping: {
        false: "",
        true: <Icon />,
      },
    },
  },
} satisfies Meta<typeof ButtonComponent>;

export default meta;

export const primaryButton = {
  args: {
    text: "등록",
  },
};

export const borderButton = {
  args: {
    text: "취소",
    backgroundColor: BackgroundColors.WHITE,
    textColor: TextColors.GRAY,
    borderColor: BorderColors.LIGHTGRAY,
  },
};

export const iconButton = {
  args: {
    text: "계정 삭제",
    backgroundColor: BackgroundColors.WHITE,
    textColor: TextColors.DANGER,
    leftIcon: true,
  },
};

import { StoryObj } from "@storybook/react";

import { TypographyComponent } from "@/core/components/typography/TypographyComponent";
import { TypographyColors, TypographySizes, TypographyWeights } from "@/core/components/typography/TypographyComponentTypes";

const meta = {
  title: "core/Typography",
  component: TypographyComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    sizes: {
      options: [
        TypographySizes.XSMALL, 
        TypographySizes.SMALL, 
        TypographySizes.MEDIUM, 
        TypographySizes.BASE, 
        TypographySizes.LARGE, 
        TypographySizes.XLARGE, 
        TypographySizes.XXLARGE,
      ],
      description: "텍스트 크기",
      control: {
        type: "radio",
      },
    },
    fontColor: {
      options: [
        TypographyColors.PRIMARY, 
        TypographyColors.SECONDARY, 
        TypographyColors.BLACK, 
        TypographyColors.DANGER, 
        TypographyColors.LIGHTGRAY, 
        TypographyColors.NAVY,
      ],
      description: "텍스트 색상",
      control: {
        type: "radio",
      },
    },
    fontWeight: {
      options: [
        TypographyWeights.NORMAL, 
        TypographyWeights.MEDIUM, 
        TypographyWeights.BOLD,
      ],
      description: "텍스트 굵기",
      control: {
        type: "radio",
      },
    },
    text: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const XSmallText: Story = {
  args: {
    text: "this is xsmall text",
    sizes: TypographySizes.XSMALL,
  },
};
export const SmallText: Story = {
  args: {
    text: "this is small text",
    sizes: TypographySizes.SMALL,
  },
};
export const BaseText: Story = {
  args: {
    text: "this is base text",
    sizes: TypographySizes.BASE,
  },
};
export const MediumText: Story = {
  args: {
    text: "this is medium text",
    sizes: TypographySizes.MEDIUM,
  },
};
export const LargeText: Story = {
  args: {
    text: "this is large text",
    sizes: TypographySizes.LARGE,
  },
};
export const XLargeText: Story = {
  args: {
    text: "this is xlarge text",
    sizes: TypographySizes.XLARGE,
  },
};
export const XXLargeText: Story = {
  args: {
    text: "this is xxlarge text",
    sizes: TypographySizes.XXLARGE,
  },
};
export const PrimaryColorText: Story = {
  args: {
    text: "this is primary color text",
    sizes: TypographySizes.BASE,
    fontColor: TypographyColors.PRIMARY,
  },
};
export const SecondaryColorText: Story = {
  args: {
    text: "this is secondary color text",
    sizes: TypographySizes.BASE,
    fontColor: TypographyColors.SECONDARY,
  },
};
export const BlackColorText: Story = {
  args: {
    text: "this is black color text",
    sizes: TypographySizes.BASE,
    fontColor: TypographyColors.BLACK,
  },
};
export const DangerColorText: Story = {
  args: {
    text: "this is danger color text",
    sizes: TypographySizes.BASE,
    fontColor: TypographyColors.DANGER,
  },
};
export const LigthgrayColorText: Story = {
  args: {
    text: "this is lightgray color text",
    sizes: TypographySizes.BASE,
    fontColor: TypographyColors.LIGHTGRAY,
  },
};
export const NavyColorText: Story = {
  args: {
    text: "this is navy color text",
    sizes: TypographySizes.BASE,
    fontColor: TypographyColors.NAVY,
  },
};
export const NormalWeightText: Story = {
  args: {
    text: "this is normal weight text",
    sizes: TypographySizes.BASE,
    fontWeight: TypographyWeights.NORMAL,
  },
};
export const MediumWeightText: Story = {
  args: {
    text: "this is medium weight text",
    sizes: TypographySizes.BASE,
    fontWeight: TypographyWeights.MEDIUM,
  },
};
export const BoldWeightText: Story = {
  args: {
    text: "this is bold weight text",
    sizes: TypographySizes.BASE,
    fontWeight: TypographyWeights.BOLD,
  },
};


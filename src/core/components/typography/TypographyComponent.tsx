import React from "react";
import { styled } from "@linaria/react";

import { TypographySizes, TypographyWeights, TypographyColors } from "@/core/components/typography/TypographyComponentTypes";

interface TypographyStyleProps {
  sizes?: TypographySizes;
  fontWeight?: TypographyWeights;
  fontColor?: TypographyColors;
}

interface TypographyProps extends TypographyStyleProps, React.HTMLAttributes<HTMLSpanElement> {
  text: string;
}

const Text = styled.span<TypographyStyleProps>`
  font-size: ${({ sizes }) => `${sizes}`};
  font-weight: ${({ fontWeight }) => `${fontWeight}`};
  color: ${({ fontColor }) => `${fontColor}`};
`;

const TypographyComponent = ({
  text,
  sizes = TypographySizes.BASE,
  fontWeight = TypographyWeights.NORMAL,
  fontColor = TypographyColors.BLACK,
}: TypographyProps) => {
  return (
    <Text
      sizes = {sizes}
      fontWeight = {fontWeight}
      fontColor = {fontColor}
    >
      {text}
    </Text>
  );
};

export { TypographyComponent };

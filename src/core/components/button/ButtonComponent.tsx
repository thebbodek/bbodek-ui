import React from "react";
import { styled } from "@linaria/react";

import { BackgroundColors, TextColors, BorderColors } from "@/core/components/button/ButtonComponentTypes";

interface ButtonStyleProps {
  backgroundColor?: BackgroundColors;
  textColor?: TextColors;
  borderColor?: BorderColors;
}

interface ButtonComponentProps extends ButtonStyleProps, React.ButtonHTMLAttributes<HTMLButtonElement>{
  text: string,
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = styled.button<ButtonStyleProps>`
  display: flex;
  width: 100%;
  height: 56px; 
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 14px 24px;
  border-radius: 12px;
  box-shadow: none;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  
  background-color: ${({ backgroundColor }) => `${backgroundColor}`};
  color: ${({ textColor }) => `${textColor}`};
  border: ${({ borderColor }) => borderColor ? `1px solid ${borderColor}` : "none"};
`;

const ButtonComponent = ({
  text,
  textColor = TextColors.WHITE,
  backgroundColor = BackgroundColors.PRIMARY,
  borderColor,
  leftIcon,
  rightIcon,
  onClick,
}: ButtonComponentProps) => {
  return (
    <Button
      type = "button"
      onClick = {onClick}
      textColor = {textColor}
      backgroundColor = {backgroundColor}
      borderColor = {borderColor}
    >
      {leftIcon && leftIcon}
      {text}
      {rightIcon && rightIcon}
    </Button>
  );
};

export { ButtonComponent };

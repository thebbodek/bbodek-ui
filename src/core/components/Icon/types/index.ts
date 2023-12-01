import * as Icons from "@phosphor-icons/react";

export interface IconProps extends Icons.IconProps {
  iconKey: keyof typeof Icons
}

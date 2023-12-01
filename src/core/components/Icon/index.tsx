import * as Icons from "@phosphor-icons/react";

import { IconProps } from "./types";

const Icon = ({ iconKey, ...props }: IconProps) => {
  const IconComponent = Icons[iconKey as keyof typeof Icons] as React.ComponentType<Omit<IconProps, "iconKey">>;

  return <IconComponent {...props} />;
};

export default Icon;

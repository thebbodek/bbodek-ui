import { IconStyle } from '@phosphor-icons/core';
import '@phosphor-icons/web/bold';
import '@phosphor-icons/web/duotone';
import '@phosphor-icons/web/fill';
import '@phosphor-icons/web/light';
import '@phosphor-icons/web/regular';
import '@phosphor-icons/web/thin';
import clsx from 'clsx';

import { IconComponentProps } from '@/core/components/Icon/types';

const Icon = ({ iconKey, weight, className, ...props }: IconComponentProps) => {
  const iconName = `ph-${iconKey}`;
  const iconWeight =
    !weight || weight === IconStyle['REGULAR'] ? 'ph' : `ph-${weight}`;

  return (
    <span
      className={clsx(
        'flex items-center justify-center',
        iconName,
        iconWeight,
        className,
      )}
      {...props}
    />
  );
};

export default Icon;

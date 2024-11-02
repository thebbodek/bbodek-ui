import clsx from 'clsx';

import '@phosphor-icons/web/thin';
import '@phosphor-icons/web/light';
import '@phosphor-icons/web/regular';
import '@phosphor-icons/web/bold';
import '@phosphor-icons/web/fill';
import '@phosphor-icons/web/duotone';

import { IconComponentProps } from '@/core/components/Icon/types';
import { IconStyle } from '@phosphor-icons/core';

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

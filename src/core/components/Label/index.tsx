import clsx from 'clsx';

import { COLOR_THEME_STYLES } from '@/constants/theme';
import { LABEL_SIZE } from './constants';
import { LabelProps } from './types';

const Label = <T extends React.ElementType = 'div'>({
  colorTheme,
  size,
  label,
  icon,
  element: Element,
  ...props
}: LabelProps<T> & React.ComponentPropsWithoutRef<T>) => {
  const { className, ...rest } = props;
  const Component: React.ElementType = Element || 'div';

  return (
    <Component
      className={clsx(
        'flex items-center justify-center gap-1',
        COLOR_THEME_STYLES[colorTheme],
        LABEL_SIZE[size],
        className,
      )}
      {...rest}
    >
      {icon && icon}
      {label}
    </Component>
  );
};

export default Label;

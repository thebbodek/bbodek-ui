import clsx from 'clsx';

import Icon from '@/core/components/Icon';

const DropdownSelectIcon = ({
  isVisibleContent,
}: {
  isVisibleContent: boolean;
}) => {
  return (
    <Icon
      iconKey={'caret-down'}
      className={clsx(
        'shrink-0 text-[1.1rem] text-gray-06',
        isVisibleContent ? 'rotate-180' : 'rotate-0',
      )}
    />
  );
};

export default DropdownSelectIcon;

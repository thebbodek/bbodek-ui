import { Meta } from '@storybook/react';

import BasicCalendar from '@/core/components/Calendar/BasicCalendar';

const meta = {
  title: 'core/Calendar/BasicCalendar',
  component: BasicCalendar,
} satisfies Meta<typeof BasicCalendar>;

export default meta;

export const DefaultCalendar = () => (
  <div className={'h-[400px] w-[300px] rounded-3xl border px-4 py-6'}>
    <BasicCalendar dottedDates={['2023-11-29']} />
  </div>
);

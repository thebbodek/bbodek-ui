import { Meta } from "@storybook/react";

import BasicCalendar from "@/core/components/Calendar/BasicCalendar";

const meta = {
  title: "core/Calendar/BasicCalendar",
  component: BasicCalendar,
} satisfies Meta<typeof BasicCalendar>;

export default meta;

export const DefaultCalendar = () =>
  <div className = {"w-[300px] h-[400px] rounded-3xl border py-6 px-4"}>
    <BasicCalendar
      dottedDates = {["2023-11-29"]}
    />
  </div>
;

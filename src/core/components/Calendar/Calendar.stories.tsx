import { Meta } from "@storybook/react";

import Calendar from "@/core/components/Calendar/calendar";

const meta = {
  title: "core/Calendar",
  component: Calendar,
} satisfies Meta<typeof Calendar>;

export default meta;

export const DefaultCalendar = () =>
  <div className = {"w-screen"}>
    <Calendar
      disabledDates = {[ "2023-11-01", "2023-11-02", "2023-11-03", "2023-11-04", "2023-11-05", "2023-11-06" ]}
      markedDates = {{
        "2023-11-16": [ "test", "test" ],
      }}
    />
  </div>
;
  export const SmallCalendar = () =>
    <div className = {"w-96"}>
      <Calendar
      disabledDates = {[ "2023-11-01", "2023-11-02", "2023-11-03", "2023-11-04", "2023-11-05", "2023-11-06" ]}
      markedDates = {{
        "2023-11-16": [ "test", "test" ],
      }}
      small = {true}
      dottedDates = {["2023-11-29"]}
    />
    </div>
;

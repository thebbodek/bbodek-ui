import { Meta } from "@storybook/react";

import Index from "@/core/components/Calendar/index";

const meta = {
  title: "core/Calendar",
  component: Index,
} satisfies Meta<typeof Index>;

export default meta;

export const Default = () =>
  <Index
    disabledDates = {[ "2023-11-01", "2023-11-02", "2023-11-03", "2023-11-04", "2023-11-05", "2023-11-06" ]}
    markedDates = {{
      "2023-11-16": [ "test", "test" ],
    }}
  />
;

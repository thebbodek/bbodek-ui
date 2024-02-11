import { Meta } from "@storybook/react";

import { ONSETS } from "../SelectOnset/constants";
import SelectOnsetItem from "./index";
import { OnsetItemProps } from "./types";

const meta = {
  title: "core/Select/SelectOnset/SelectOnsetItem",
  component: SelectOnsetItem,
  argTypes: {
    onset: {
      control: "select",
      options: ONSETS,
      description: "onset",
    },
  },
} satisfies Meta<typeof SelectOnsetItem>;

export default meta;

export const Default = (props: OnsetItemProps) => {
  return (
    <ul>
      <SelectOnsetItem
        onset = {"ㄱ"}
        checked = {"ㄱ" === props.onset}
      />
    </ul>
  );
};


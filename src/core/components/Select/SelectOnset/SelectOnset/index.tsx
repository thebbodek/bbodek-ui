import clsx from "clsx";
import { forwardRef } from "react";

import Typography from "../../../Typography";
import SelectOnsetItem from "../SelectOnsetItem";
import { ONSETS, ONSETS_CONTAINER_VARIANTS, ONSETS_VARIANTS } from "./constants";
import { SelectOnsetProps } from "./types";

const SelectOnset = forwardRef((
    {
      variants,
      currentOnset,
      onChange,
      className,
    }: SelectOnsetProps,
    ref: React.Ref<HTMLUListElement>,
  ) => {
  const items = ONSETS.map(onset => (
    <SelectOnsetItem key = {onset} onset = {onset} onChange = {onChange} checked = {currentOnset === onset}/>
  ));

  return (
    <div className = {clsx(`${ONSETS_CONTAINER_VARIANTS[variants]} flex gap-3`, className)}>
      <Typography theme = "body-02-regular" color = "gray-07" text = "초성으로 원아 찾기"/>
      <ul ref = {ref} className = {`flex items-center ${ONSETS_VARIANTS[variants]}`}>
        {items}
      </ul>
    </div>
  );
});

export default SelectOnset;

SelectOnset.displayName = "SelectOnset";


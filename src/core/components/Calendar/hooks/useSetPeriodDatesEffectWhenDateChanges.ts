import dayjs from "dayjs";
import { useEffect } from "react";

export const useSetPeriodDatesEffectWhenDateChanges = (
  startDate: dayjs.Dayjs | undefined,
  endDate: dayjs.Dayjs | undefined,
  setPeriodDates: React.Dispatch<React.SetStateAction<string[]>>,
) => {
  useEffect(() => {
    if(!endDate || !startDate) {
      // TODO : startDate, endDate 가 없을 때 error handling
      return;
    }
    const diffDate = endDate.diff(startDate, "day");

    const newState = [];
    for (let i = 0; i <= diffDate; i++) {
      newState.push(startDate.add(i, "day").format("YYYY-MM-DD"));
    }
    setPeriodDates(newState);
  }, [ startDate, endDate, setPeriodDates ]);
};

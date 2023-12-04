import dayjs from "dayjs";
import "dayjs/locale/ko";

import { Weekdays } from "@/constants";
import Typography from "@/core/components/Typography";

export const CalendarWeekDayComponent = () => {
  const convertWeekdayNumberToString = (weekdayNumber: number) => {
    return dayjs().startOf("week").add(weekdayNumber, "day").locale("ko").format("ddd");
  };

  return (
    <div className = {"grid grid-cols-7 min-w-full w-full justify-center items-center mb-4 text-center"}>
      { Object.values(Weekdays).map(weekdayNumber => (
        <Typography key = {weekdayNumber} text = {convertWeekdayNumberToString(weekdayNumber)} />
      ))}
    </div>
  );
};

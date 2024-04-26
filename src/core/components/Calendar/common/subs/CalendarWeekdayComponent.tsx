import clsx from "clsx";
import dayjs from "dayjs";
import "dayjs/locale/ko";

import { Weekdays } from "@/constants";
import Typography from "@/core/components/Typography";

export const CalendarWeekDayComponent = ({ className }: { className?: string }) => {
  const convertWeekdayNumberToString = (weekdayNumber: number) => {
    return dayjs().startOf("week").add(weekdayNumber, "day").locale("ko").format("ddd");
  };

  return (
    <div className = {clsx("grid grid-cols-7 min-w-full w-full justify-center items-center text-center", className)}>
      {Object.values(Weekdays).map(weekdayNumber => (
        <Typography element = "strong" key = {weekdayNumber} text = {convertWeekdayNumberToString(weekdayNumber)} theme = "body-02-regular" color = "gray-06" className = "md:text-body-01-regular !text-inherit"/>
      ))}
    </div>
  );
};

import dayjs from "dayjs";
import "dayjs/locale/ko";

import { Weekdays } from "@/constants";

export default function CalendarWeekDayComponent () {

  const convertWeekdayNumberToString = (weekdayNumber: number) => {
    return dayjs().startOf("week").add(weekdayNumber, "day").locale("ko").format("ddd");
  };

  return (
    <div className = {"grid grid-cols-7 justify-center items-center gap-2.5"}>
      { Object.values(Weekdays).map(weekdayNumber => (
        <div
          key = {weekdayNumber}
          className = {"flex justify-center items-center w-[2.875rem] h-[2.875rem]"}
        >
          {convertWeekdayNumberToString(weekdayNumber)}
        </div>
      ))}
    </div>
  );
}

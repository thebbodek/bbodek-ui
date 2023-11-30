import dayjs from "dayjs";
import "dayjs/locale/ko";

import { Weekdays } from "@/constants";

export default function CalendarWeekDayComponent () {

  const convertWeekdayNumberToString = (weekdayNumber: number) => {
    return dayjs().startOf("week").add(weekdayNumber, "day").locale("ko").format("ddd");
  };

  return (
    <div className = {"grid grid-cols-7 min-w-full w-full justify-center items-center"}>
      { Object.values(Weekdays).map(weekdayNumber => (
        <div
          key = {weekdayNumber}
          className = {"flex justify-center items-center mb-4"}
        >
          {convertWeekdayNumberToString(weekdayNumber)}
        </div>
      ))}
    </div>
  );
}

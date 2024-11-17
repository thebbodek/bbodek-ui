import DatePickerCalendarDay from '@/core/components/Calendar/DatePickerCalendar/DatePickerCalendarDay';
import { DatePickerCalendarWeekProps } from '@/core/components/Calendar/DatePickerCalendar/types/DatePickerCalendarProps';

const DatePickerCalendarWeek = ({
  exceptionDay,
  calendarWeekDates,
  useHoliday,
  cutoffDate,
  cutoffAfterDate,
  disabledDates,
  temporaryDates,
  handleDateClick,
  label,
  variants,
  periodDates,
  setCalendarPeriodDates,
  onDateClick,
  afterAllDate = false,
  periodDateArray,
}: DatePickerCalendarWeekProps) => {
  return (
    <div className={'grid grid-cols-7'}>
      {calendarWeekDates.map((calendarDate, index) => (
        <DatePickerCalendarDay
          key={index}
          calendarDate={calendarDate}
          exceptionDay={exceptionDay}
          useHoliday={useHoliday}
          cutoffDate={cutoffDate}
          cutoffAfterDate={cutoffAfterDate}
          disabledDates={disabledDates}
          temporaryDates={temporaryDates}
          handleDateClick={handleDateClick}
          label={label}
          variants={variants}
          setCalendarPeriodDates={setCalendarPeriodDates}
          periodDates={periodDates}
          onDateClick={onDateClick}
          afterAllDate={afterAllDate}
          periodDateArray={periodDateArray}
        />
      ))}
    </div>
  );
};

export default DatePickerCalendarWeek;

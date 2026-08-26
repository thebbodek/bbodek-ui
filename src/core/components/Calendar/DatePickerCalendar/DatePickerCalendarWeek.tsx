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
    <div className='grid grid-cols-7'>
      {calendarWeekDates.map((calendarDate, index) => (
        <DatePickerCalendarDay
          afterAllDate={afterAllDate}
          calendarDate={calendarDate}
          cutoffAfterDate={cutoffAfterDate}
          cutoffDate={cutoffDate}
          disabledDates={disabledDates}
          exceptionDay={exceptionDay}
          handleDateClick={handleDateClick}
          key={index}
          label={label}
          periodDateArray={periodDateArray}
          periodDates={periodDates}
          setCalendarPeriodDates={setCalendarPeriodDates}
          temporaryDates={temporaryDates}
          useHoliday={useHoliday}
          variants={variants}
          onDateClick={onDateClick}
        />
      ))}
    </div>
  );
};

export default DatePickerCalendarWeek;

import { PeriodDates } from "../../DatePickerCalendar/types/DatePickerCalendarProps";

export interface MarkedDatesProps {
  markedDates?: string[];
  quantity?: number;
}

export interface SchedulesDataProps {
  [date: string]: MarkedDatesProps;
}

export interface CalendarComponentProps {
  initialDate?: number;
  schedulesData?: SchedulesDataProps;
  defaultQuantity?: number;
  onDateClick: (date: string) => void;
  onRender: (renderDates: PeriodDates) => void;
}

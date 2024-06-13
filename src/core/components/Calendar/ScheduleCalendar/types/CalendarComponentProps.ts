import { PeriodDates } from '../../DatePickerCalendar/types/DatePickerCalendarProps';
import { CalendarHeaderProps } from '../../common/types/CalendarHeader';

export interface MarkedDatesProps {
  markedDates?: string[];
  quantity?: number;
}

export interface SchedulesDataProps {
  [date: string]: MarkedDatesProps;
}

export interface CalendarComponentProps
  extends Pick<CalendarHeaderProps, 'monthButtonStatus'> {
  initialDate?: number;
  schedulesData?: SchedulesDataProps;
  defaultQuantity?: number;
  onDateClick: (date: string) => void;
  onRender?: (renderDates: PeriodDates) => void;
}

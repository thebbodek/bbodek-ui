
export interface MarkedDatesProps {
  markedDates?: (string | undefined)[];
  quantity?: number;
}

export interface SchedulesDataProps {
  [date: string]: MarkedDatesProps;
}

export interface CalendarComponentProps {
  schedulesData?: SchedulesDataProps;
  onDateClick: (date: string) => void;
}

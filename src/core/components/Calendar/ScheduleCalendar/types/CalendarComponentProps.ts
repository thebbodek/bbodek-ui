
export interface MarkedDatesProps {
  markedDates?: (string | undefined)[];
  quantity?: number;
}

export interface SchedulesDataProps {
  [date: string]: MarkedDatesProps;
}

export interface CalendarComponentProps {
  schedulesData?: SchedulesDataProps;
  defaultQuantity?: number;
  onDateClick: (date: string) => void;
}

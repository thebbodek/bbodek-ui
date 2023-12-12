export interface MarkedDatesProps {
  [date: string]: string[] | undefined[];
}

export interface CalendarComponentProps {
  markedDates?: MarkedDatesProps[];
  onDateClick: (date: string) => void;
}

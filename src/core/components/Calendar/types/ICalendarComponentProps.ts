export interface CalendarComponentProps {
  markedDates?: {
    [date: string]: string[];
  };
  disabledDates?: string[];
  small?: boolean;
  dottedDates?: string[];
}

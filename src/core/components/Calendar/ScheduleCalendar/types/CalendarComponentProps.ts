export interface MarkedDatesItemsProps {
  label: string | undefined;
  memo: string;
}

export interface MarkedDatesProps {
  date: string;
  items: MarkedDatesItemsProps[];
}

export interface CalendarComponentProps {
  markedDates?: MarkedDatesProps[];
  onDateClick: (date: string, data: MarkedDatesItemsProps[]) => void;
}

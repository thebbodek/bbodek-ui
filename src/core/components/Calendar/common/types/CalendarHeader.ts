import { MONTH_BUTTON_STATUS } from '../constants';

export interface CalendarHeaderProps {
  currentMonth: string;
  onPreviousMonthClick?: () => void;
  onNextMonthClick?: () => void;
  monthButtonStatus?: MonthButtonStatusTypes;
}

export type MonthButtonStatusTypes =
  (typeof MONTH_BUTTON_STATUS)[keyof typeof MONTH_BUTTON_STATUS];

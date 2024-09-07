import dayjs from 'dayjs';

import { MONTH_BUTTON_STATUS } from '../constants';

export interface CalendarHeaderProps {
  currentMonth: dayjs.Dayjs;
  onPreviousMonthClick?: () => void;
  onNextMonthClick?: () => void;
  monthButtonStatus?: MonthButtonStatusTypes;
}

export type MonthButtonStatusTypes =
  (typeof MONTH_BUTTON_STATUS)[keyof typeof MONTH_BUTTON_STATUS];

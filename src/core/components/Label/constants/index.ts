import { SizeType } from '../types';

export const SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
} as const;

export const LABEL_SIZE: Record<SizeType, string> = {
  [SIZE.SMALL]: 'text-body-03-regular px-2 py-0.5',
  [SIZE.MEDIUM]: 'text-body-02-regular px-2 py-1',
  [SIZE.LARGE]: 'text-body-01-regular px-2 py-1',
};

export const LABEL_ROUNDED: Record<SizeType, string> = {
  [SIZE.SMALL]: 'rounded-md',
  [SIZE.MEDIUM]: 'rounded-md',
  [SIZE.LARGE]: 'rounded-lg',
};

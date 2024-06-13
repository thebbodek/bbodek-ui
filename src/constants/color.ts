export const THEME_COLOR = {
  WHITE: 'white',
  BLACK: 'black',
  GRAY_09: 'gray-09',
  GRAY_08: 'gray-08',
  GRAY_07: 'gray-07',
  GRAY_06: 'gray-06',
  GRAY_05: 'gray-05',
  GRAY_04: 'gray-04',
  GRAY_03: 'gray-03',
  GRAY_02: 'gray-02',
  GRAY_01: 'gray-01',
  GRAY_00: 'gray-00',
  PRIMARY_06: 'primary-06',
  PRIMARY_05: 'primary-05',
  PRIMARY_04: 'primary-04',
  PRIMARY_03: 'primary-03',
  PRIMARY_02: 'primary-02',
  PRIMARY_01: 'primary-01',
  PRIMARY_00: 'primary-00',
  ERROR: 'error',
  WARNING: 'warning',
  SUCCESS: 'success',
  TRANSPARENT: 'transparent',
};

export const ColorOptions = Object.keys(THEME_COLOR).map(
  (color) => THEME_COLOR[color as keyof typeof THEME_COLOR],
);

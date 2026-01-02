import { SVG_SIZE } from '../constants';

export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  svgSize?: keyof typeof SVG_SIZE;
}

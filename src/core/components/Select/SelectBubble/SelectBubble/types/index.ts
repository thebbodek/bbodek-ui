import { FormLabelProps } from "@/core/components/FormLabel/types";
import SelectBubbleItem from "../../SelectBubbleItem";

export interface SelectBubbleProps extends React.HTMLAttributes<HTMLUListElement>, FormLabelProps {
  items: React.ReactNode[]
}

type TableTabComponent = (props: SelectBubbleProps) => React.ReactElement;

export type ReturnType = TableTabComponent & {
  displayName: string;
  Item: typeof SelectBubbleItem;
};

import TableTabItem from "../../TableTabItem";

export interface TableTabProps extends React.HTMLAttributes<HTMLUListElement> {
  items: React.ReactNode[]
}

type TableTabComponent = (props: TableTabProps) => React.ReactElement;

export type ReturnType = TableTabComponent & {
  displayName: string;
  Item: typeof TableTabItem;
};

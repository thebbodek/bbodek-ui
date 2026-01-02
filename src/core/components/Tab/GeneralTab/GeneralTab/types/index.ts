import GeneralTabItem from '../../GeneralTabItem';

export interface GeneralTabProps extends React.HTMLAttributes<HTMLUListElement> {
  items: React.ReactNode[];
}

type GeneralTabComponent = (props: GeneralTabProps) => React.ReactElement;

export type ReturnType = GeneralTabComponent & {
  displayName: string;
  Item: typeof GeneralTabItem;
};

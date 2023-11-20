import { Meta } from "@storybook/react";

import { TableContainerProps } from "./types";
import TableContainer from "./TableContainer";
import Table from "./Table";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import TableRow from "./TableRow";
import TableCell from "./TableCell";

const meta = {
  title: "core/Table",
  component: TableContainer,
  argTypes: {
    children: {
      control: "object",
    },
    theme: {
      control: "radio",
      options: [ "white", "gray" ],
      defaultValue: "white",
      description: "Table Color Theme",
    },
  },
} satisfies Meta<typeof TableContainer>;

export default meta;

export interface RowsProps {
  id: number;
  [key: string]: React.ReactNode;
}

const columns = [
  {
    key: "id",
    text: "No",
  },
  {
    key: "registerDate",
    text: "주문 일자",
  },
  {
    key: "startDate",
    text: "시작 일자",
  },
  {
    key: "room",
    text: "반",
  },
  {
    key: "package",
    text: "상품",
  },
];

const rows: RowsProps[] = [
  {
    id: 1,
    registerDate: "2023-11-19",
    startDate: "2023-12-01",
    room: "꽃님반",
    package: "식기 + 수저",
  },
  {
    id: 2,
    registerDate: "2023-11-19",
    startDate:
  <div>
    <div className = "text-rose-400">월 구독</div>
    2023.10.22 (월)
  </div>,
    room: "꽃님반",
    package: "식기 + 수저",
  },
];

const columnsKeys = columns.map(column => column.key);

export const WhiteTable = (props: TableContainerProps) => {
  return (
    <TableContainer theme = {props.theme ?? "white"}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map(column =>
              <TableCell key = {column.key} element = "th">{column.text}</TableCell>,
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row =>
            <TableRow key = {row.id}>
              {columnsKeys.map((key, index) => (
                <TableCell key = {index} element = "td">{row[key]}</TableCell>
              ))}
            </TableRow>,
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export const GrayTable = (props: TableContainerProps) => {
  return (
    <TableContainer theme = {props.theme ?? "gray"}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map(column =>
              <TableCell key = {column.key} element = "th">{column.text}</TableCell>,
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row =>
            <TableRow key = {row.id}>
              {columnsKeys.map(key => (
                <TableCell key = {key} element = "td">{row[key]}</TableCell>
              ))}
            </TableRow>,
        )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

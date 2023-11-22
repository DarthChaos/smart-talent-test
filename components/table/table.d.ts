import { ColumnDef } from "@tanstack/react-table";

export interface TableDataObject {
  [key: string]: string | number | boolean;
}

export interface TableProps {
  title: string;
  data: TableDataObject[] | any;
  columns: ColumnDef<TableDataObject | any>[];
  pageSize?: number;
  onInputChange?: (val: string) => void;
}

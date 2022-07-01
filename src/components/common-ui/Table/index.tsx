import React from 'react';
import { useTable } from 'react-table';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { Container, HeaderCell } from './styles';

export interface Columns {
  Header: string;
  accessor: string;
  style?: React.CSSProperties;
}

interface Props {
  columns: Columns[];
  data: any[];
}

const TableComponent: React.FC<Props> = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <Container>
      <Table {...getTableProps()} stickyHeader>
        <TableHead>
          <TableRow {...headerGroups[0]?.getHeaderGroupProps()}>
            {headerGroups[0]?.headers.map((column: any) => {
              return (
                <HeaderCell
                  key={column.render('Header')}
                  {...column.getHeaderProps([
                    {
                      style: column.style,
                    },
                  ])}
                >
                  {column.render('Header')}
                </HeaderCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {rows.map((row: any) => {
            prepareRow(row);
            return (
              <TableRow {...row.getRowProps()} key={`row-${row.id}`}>
                {row.cells.map((cell: any) => {
                  return (
                    <TableCell
                      key={cell.render('Cell')}
                      {...cell.getCellProps()}
                    >
                      {cell.render('Cell')}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Container>
  );
};

export default TableComponent;

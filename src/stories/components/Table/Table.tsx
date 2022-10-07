import React from 'react';

import { DataGridProps } from '@mui/x-data-grid';
import StyledDataGrid from './Table.styled';
import Pagination from '../Pagination';
import Toolbar from '../Toolbar';
import { CustomPaginationProps } from '../Pagination/Pagination';
import { Box } from '@mui/material';

type Dimesion = {
  height: string;
  width: string;
};

interface CustomTableProps {
  dimension?: Dimesion;
  dataGridProps: DataGridProps;
  paginationProps?: CustomPaginationProps;
  toolbarProps?: {
    value: string;
    onChange: (value: string) => void;
  };
}

function Table({
  dataGridProps,
  paginationProps,
  dimension,
  toolbarProps,
}: CustomTableProps) {
  return (
    <Box height={dimension?.height} width={dimension?.width}>
      <StyledDataGrid
        components={{
          Pagination: Pagination,
          Toolbar: Toolbar,
        }}
        componentsProps={{
          toolbar: toolbarProps,
          pagination: paginationProps,
        }}
        {...dataGridProps}
      />
    </Box>
  );
}

export default Table;

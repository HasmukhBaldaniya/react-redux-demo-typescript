import React from 'react';

import { DataGridProps } from '@mui/x-data-grid';
import StyledDataGrid from './Table.styled';
import Pagination from '../Pagination';
import { CustomPaginationProps } from '../Pagination/Pagination';

function Table({
  dataGridProps,
  paginationProps,
}: {
  dataGridProps: DataGridProps;
  paginationProps?: CustomPaginationProps;
}) {
  return (
    <div>
      <StyledDataGrid {...dataGridProps} />
      {paginationProps && paginationProps.page && (
        <Pagination {...paginationProps}></Pagination>
      )}
    </div>
  );
}

export default Table;

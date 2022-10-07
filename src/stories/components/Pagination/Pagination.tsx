import React from 'react';
import Stack from '@mui/material/Stack';
import Select, { SelectProps } from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import MuiPagination, { PaginationProps } from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';

import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import { MenuItem } from '@mui/material';

export interface CustomPaginationProps {
  rowsPerPageOption: number[];
  selectedRow: number;
  onRowChange: (row: number) => void;
  totalCount: number;
  page: number;
  onPageChange: (page: number) => void;
  selectProps?: SelectProps;
  paginationProps?: PaginationProps;
}

function Pagination({
  rowsPerPageOption,
  selectedRow,
  onRowChange,
  totalCount,
  page,
  onPageChange,
  selectProps,
  paginationProps,
}: CustomPaginationProps) {
  return (
    <Stack
      justifyContent="space-between"
      direction="row"
      alignItems="center"
      margin={1}
      padding={1}
      width="100%"
    >
      <Stack direction="row" alignItems="center" spacing={1}>
        <Typography fontSize={'.9rem'}>Rows per page</Typography>
        <Select
          value={selectedRow}
          size="small"
          sx={{ fontSize: '.9rem' }}
          onChange={(e) => onRowChange(e.target.value as number)}
          {...selectProps}
        >
          {rowsPerPageOption.map((row) => (
            <MenuItem key={row} value={row}>
              {row}
            </MenuItem>
          ))}
        </Select>
      </Stack>
      <Stack spacing={2}>
        <MuiPagination
          page={page}
          onChange={(e, value) => onPageChange(value)}
          count={totalCount}
          renderItem={(item) => (
            <PaginationItem
              components={{ previous: WestIcon, next: EastIcon }}
              {...item}
            />
          )}
          {...paginationProps}
        />
      </Stack>
    </Stack>
  );
}

export default Pagination;

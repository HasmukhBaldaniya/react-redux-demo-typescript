import { GridRenderCellParams, GridColDef } from '@mui/x-data-grid';
import { SelectChangeEvent } from '@mui/material/Select';

import MenuItem from '@mui/material/MenuItem';

import Table from '.';
import Select from '../Select';

export const RenderCell = (params: GridRenderCellParams) => {
  const { row } = params;

  const updateStatus = (event: SelectChangeEvent<unknown>) => {
    row.updateTodo(row.id as number, {
      ...row,
      completed: event.target.value === 1 ? true : false,
    });
  };

  return (
    <Select
      size="small"
      type="row"
      value={row.completed ? 1 : 0}
      onChange={updateStatus}
      sx={{
        fontSize: '.8rem',
      }}
    >
      <MenuItem value={1}>DONE</MenuItem>
      <MenuItem value={0}>ON GOING</MenuItem>
    </Select>
  );
};

export const COLUMNS: GridColDef[] = [
  {
    field: 'id',
    headerName: 'ID',
    flex: 0.3,
    headerAlign: 'center',
    align: 'center',
  },
  { field: 'title', flex: 2, headerName: 'Title' },
  {
    field: 'completed',
    headerName: 'Status',
    flex: 1,
    renderCell: (params) => <RenderCell {...params} />,
  },
];

export const ROWS = [
  {
    id: 1,
    title: 'some random task',
    completed: 1,
    updateTodo: (params: unknown) => console.log(params),
  },
  {
    id: 2,
    title: 'walk a dog',
    completed: 0,
    updateTodo: (params: unknown) => console.log(params),
  },
  {
    id: 3,
    title: 'Clean desk',
    completed: 1,
    updateTodo: (params: unknown) => console.log(params),
  },
  {
    id: 4,
    title: 'Review merge request',
    completed: 0,
    updateTodo: (params: unknown) => console.log(params),
  },
  {
    id: 5,
    title: 'Buy groceries',
    completed: 0,
    updateTodo: (params: unknown) => console.log(params),
  },
  {
    id: 6,
    title: 'Buy milk',
    completed: 0,
    updateTodo: (params: unknown) => console.log(params),
  },
];

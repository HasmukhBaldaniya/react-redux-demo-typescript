import { styled } from '@mui/material/styles';
import { DataGrid } from '@mui/x-data-grid';

const StyledDataGrid = styled(DataGrid)((params) => ({
  marginTop: '1.5rem',
  borderRadius: '10px 10px 10px 10px',

  '.MuiDataGrid-columnHeadersInner': {
    backgroundColor: 'rgba(18, 30, 42, .1)',
    borderRadius: '10px 10px 0px 0px',
  },
  '.MuiDataGrid-columnSeparator': {
    visibility: 'hidden',
  },
}));

export default StyledDataGrid;

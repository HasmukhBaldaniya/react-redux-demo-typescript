import React, { useState, useEffect } from 'react';
import { GridColDef, GridToolbarContainer } from '@mui/x-data-grid';
import { useGetProductsQuery } from '../../redux-store/product';
import Table from '../../stories/components/Table';
import Pagination from '../../stories/components/Pagination';
import { useLazyGetProductsQuery } from '../../redux-store/product/product.slice';
import useCounter from '../../hooks';

const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: '#',
    flex: 1,
  },
  {
    field: 'title',
    headerName: 'Title',
    flex: 1,
  },
  {
    field: 'price',
    headerName: 'Price',
    flex: 1,
  },
  {
    field: 'category',
    headerName: 'Category',
    flex: 1,
  },
];

// rowsPerPageOption,//
//   selectedRow,//
//   onRowChange,
//   totalCount,//
//   page,//
//   onPageChange,

function ProductGrid() {
  const [page, setPage] = useState<number>(1);
  const [row, setRow] = useState<number>(10);
  const [value, setValue] = useState<string>('');
  const { state, addCount, subCount } = useCounter();

  const [call, { isLoading, isFetching, data: products }] =
    useLazyGetProductsQuery();

  useEffect(() => {
    call({ page, limit: row, search: value });
    //make all api calls here
  }, [page, row, value]);

  return (
    <div style={{ width: '70%', margin: 'auto' }}>
      <div>
        <button type='button' onClick={addCount}>Increment Count</button>
        <button type='button' onClick={subCount}>Decrement Count</button>
        <br />
        {state.count}
      </div>
      <Table
        dataGridProps={{
          columns: columns,
          rows: products || [],
          loading: isLoading || isFetching,
          checkboxSelection: false,
          autoHeight: true,
          disableColumnMenu: true,
          componentsProps: {
            pagination: {
              page: page,
              onPageChange: (page: number) => setPage(page),
              rowsPerPageOption: [10, 20, 30],
              totalCount: products?.length ? products.length / row : 1,
              selectedRow: row,
              onRowChange: (row: number) => setRow(row),
            },
            toolbar: {
              value: value,
              onChange: (value: string) => setValue(value),
            },
          },
        }}
      />
    </div>
  );
}

export default ProductGrid;

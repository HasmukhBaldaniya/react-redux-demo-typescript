import React, { useState } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ROWS, COLUMNS, RenderCell } from './data';

import Table from '.';

export default {
  title: 'example/Table',
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const BasicTableWithPagination = Template.bind({});
BasicTableWithPagination.args = {
  dimension: {
    height: '70vh',
    width: '100%',
  },
  dataGridProps: {
    columns: COLUMNS,
    rows: ROWS,
    checkboxSelection: true,
    disableSelectionOnClick: true,
    disableColumnMenu: true,
    // pagination: true,
    autoHeight: true,
    pageSize: 10,
    page: 0,
    hideFooter: false,
  },
  paginationProps: {
    rowsPerPageOption: [10, 20, 30],
    selectedRow: 10,
    onRowChange: (params) => console.log(params),
    totalCount: ROWS.length,
    page: 1,
    onPageChange: (params) => console.log(params),
    paginationProps: {
      shape: 'rounded',
      color: 'primary',
    },
  },
};

export const TableWithoutPagintion = Template.bind({});

TableWithoutPagintion.args = {
  dimension: {
    height: '70vh',
    width: '100%',
  },
  dataGridProps: {
    columns: COLUMNS,
    rows: ROWS,
    checkboxSelection: true,
    disableSelectionOnClick: true,
    disableColumnMenu: true,
    pagination: true,
    autoHeight: true,
    pageSize: 2,
    page: 0,
    hideFooter: true,
  },
};

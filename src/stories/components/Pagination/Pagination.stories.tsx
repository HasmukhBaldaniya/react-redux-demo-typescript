import React, { useState } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Pagination from '.';

export default {
  title: 'example/Pagination',
  component: Pagination,
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => (
  <Pagination {...args} />
);

export const BasicPagination = Template.bind({});
BasicPagination.args = {
  totalCount: 20,
  onPageChange: (page) => console.log(page),
  page: 1,
  rowsPerPageOption: [10, 20, 30],
  selectedRow: 10,
  onRowChange: (row) => console.log(row),
  paginationProps: {
    shape: 'rounded',
    color: 'primary',
  },
};

export const StatefulPagination = () => {
  const [page, setPage] = useState<number>(1);
  const [rowChange, setRowChange] = useState<number>(10);

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  const handleRowChange = (row: number) => {
    setRowChange(row);
  };

  return (
    <Template
      totalCount={10}
      onPageChange={handlePageChange}
      page={page}
      rowsPerPageOption={[10, 20, 30]}
      selectedRow={rowChange}
      onRowChange={handleRowChange}
      paginationProps={{
        shape: 'rounded',
        color: 'primary',
      }}
    ></Template>
  );
};

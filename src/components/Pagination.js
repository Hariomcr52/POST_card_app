import React from 'react';
import { Pagination as MUIPagination, Box } from '@mui/material';

const Pagination = ({ count, page, onChange }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
      <MUIPagination
        count={count}
        page={page}
        onChange={onChange}
        color="primary"
        size="large"
        shape="rounded"
      />
    </Box>
  );
};

export default Pagination;
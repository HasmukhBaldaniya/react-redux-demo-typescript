import React from 'react';
import { Box, TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import StyledToolbarContainer from './Toolbar.styled';

function Toolbar({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onChange(e.target.value);
  };

  return (
    <StyledToolbarContainer>
      <TextField
        value={value}
        onChange={handleOnChange}
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon fontSize="small" />
            </InputAdornment>
          ),
        }}
      />
    </StyledToolbarContainer>
  );
}

export default Toolbar;

import React from 'react';
import { Button, TextField } from '@mui/material';

function Login() {
  return (
    <>
      <div>
        <TextField label="Email" />
      </div>
      <Button sx={{ marginTop: '1rem' }} variant="contained">
        Login
      </Button>
    </>
  );
}

export default Login;

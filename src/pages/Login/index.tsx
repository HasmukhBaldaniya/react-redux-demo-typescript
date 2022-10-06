import React from 'react';
import { Button, TextField } from '@mui/material';
import { useLoginUserMutation } from '../../feature/authentication/users';
import { useNavigate } from 'react-router-dom';

const CREDS = { username: 'mor_2314', password: '83r5^_' };

function Login() {
  const [login] = useLoginUserMutation();
  const navigate = useNavigate();

  const handleOnClick = async () => {
    try {
      const response = await login(CREDS);
      console.log(response);
      // navigate('/product');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <TextField label="Email" />
      </div>
      <Button
        onClick={handleOnClick}
        sx={{ marginTop: '1rem' }}
        variant="contained"
      >
        Login
      </Button>
    </>
  );
}

export default Login;

import React, { useEffect } from "react";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authApi } from "../../redux-store/authentication/auth.action";
import { store } from "../../redux-store/store";

const CREDS = { username: "mor_2314", password: "83r5^_" };

function Login() {
  const dispatch = useDispatch<typeof store.dispatch>();
  // const [login] = useLoginUserMutation();
  const navigate = useNavigate();

  const handleOnClick = async () => {
    try {
      const response = await dispatch(authApi(CREDS)).unwrap();
      if(response.data.token) {
        localStorage.setItem('token', response.data.token);
        navigate('/product');
      }
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
        sx={{ marginTop: "1rem" }}
        variant="contained"
      >
        Login
      </Button>
    </>
  );
}

export default Login;

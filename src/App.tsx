import { BrowserRouter, Routes } from "react-router-dom";
import { Routes as AppRoute } from "./routes";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { store } from "./redux-store/store";
import { setToken } from "./redux-store/authentication/auth.slice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch<typeof store.dispatch>();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    try {
      const token = localStorage.getItem("token");
      if (token) {
        dispatch(setToken({ token }));
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  return isLoading ? (
    "Loading....."
  ) : (
    <BrowserRouter>
      <AppRoute />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        theme={'colored'}
        pauseOnFocusLoss
      />
    </BrowserRouter>
  );
}

export default App;

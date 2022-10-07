import { BrowserRouter, Routes } from 'react-router-dom';
import { Routes as AppRoutess } from './routes';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { store } from './redux-store/store';
import { setToken } from './redux-store/authentication/auth.slice';

function App() {
  const dispatch = useDispatch<typeof store.dispatch>();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    try {
      const token = localStorage.getItem('token');
      if (token) {
        dispatch(setToken({ token }));
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  console.log(isLoading);
  return isLoading ? (
    'Loading.....'
  ) : (
    <BrowserRouter>
      <AppRoutess />
    </BrowserRouter>
  );
}

export default App;

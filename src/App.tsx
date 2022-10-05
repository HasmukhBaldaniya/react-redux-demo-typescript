import { useGetProductsQuery } from './feature/product';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Routes as AppRoutess } from './routes';

function App() {
  return (
    <BrowserRouter>
      <AppRoutess />
    </BrowserRouter>
  );
}

export default App;

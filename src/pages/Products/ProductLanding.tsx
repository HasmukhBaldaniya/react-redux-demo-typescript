import React from 'react';

import { Button, Container, Grid, LinearProgress } from '@mui/material';

import { useGetProductsQuery } from '../../redux-store/product';
import ProductCard from './components/ProductCard';
import { useDispatch } from 'react-redux';
import { store } from '../../redux-store/store';
import { setToken } from '../../redux-store/authentication/auth.slice';
import { useNavigate } from 'react-router-dom';

function ProductLanding() {
  const dispatch = useDispatch<typeof store.dispatch>();
  const navigate = useNavigate();
  const { data: products, isLoading, isFetching } = useGetProductsQuery();
  const logout = () => {
    dispatch(setToken({ token: null }));
    localStorage.clear();
    navigate('/login');
  };
  if (isLoading || isFetching) return <LinearProgress />;

  return (
    <Container>
      <Button variant={'contained'} onClick={logout}>
        Logout
      </Button>
      <Button variant={'contained'} onClick={() => navigate('/product/grid')}>
        grid
      </Button>
      <Grid container spacing={3}>
        {products?.map((product) => (
          <Grid item md={3}>
            <ProductCard
              imageUrl={product.image}
              title={product.title}
              rating={product.rating.rate}
              description={product.description}
              count={product.rating.count}
              price={product.price}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ProductLanding;

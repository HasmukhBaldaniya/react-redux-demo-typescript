import React, { useEffect } from 'react';
import { Button, Container, Grid, LinearProgress } from '@mui/material';
import { useGetProductsQuery } from '../../redux-store/product';
import ProductCard from './components/ProductCard';
import { useDispatch } from 'react-redux';
import { store } from '../../redux-store/store';
import { setToken } from '../../redux-store/authentication/auth.slice';
import { useNavigate } from 'react-router-dom';
import { useAddToCart } from '../../hooks/addToCart.hook';
import ProductCart from './ProductCart';

function ProductLanding() {
  const dispatch = useDispatch<typeof store.dispatch>();
  const { products: cartProduct, dispatch:addProduct } = useAddToCart();
  const navigate = useNavigate();
  const { data: products, isLoading, isFetching } = useGetProductsQuery();
  const logout = () => {
    dispatch(setToken({ token: null }));
    localStorage.clear();
    navigate('/login');
  };

  const onAddToCart = (params: any) => {
    addProduct({type: 'add', payload: params})
  }

  if (isLoading || isFetching) return <LinearProgress />;

  return (
    <Container>
      <ProductCart />
      <Button variant={'contained'} onClick={logout}>
        Logout
      </Button>
      <Button variant={'contained'} onClick={() => navigate('/product/grid')}>
        grid
      </Button>
      <Grid container spacing={3}>
        {products?.map((product, index: number) => (
          <Grid item md={3} key={index}>
            <ProductCard
              imageUrl={product.image}
              title={product.title}
              rating={product.rating.rate}
              description={product.description}
              count={product.rating.count}
              price={product.price}
              id={product.id}
              addToCart={onAddToCart}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ProductLanding;

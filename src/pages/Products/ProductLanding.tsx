import React from 'react';

import { Container, Grid, LinearProgress } from '@mui/material';

import { useGetProductsQuery } from '../../redux-store/product';
import ProductCard from './components/ProductCard';

function ProductLanding() {
  const { data: products, isLoading, isFetching } = useGetProductsQuery();

  if (isLoading || isFetching) return <LinearProgress />;

  return (
    <Container>
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

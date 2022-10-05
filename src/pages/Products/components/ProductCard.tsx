import React from 'react';

import {
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
  Rating,
} from '@mui/material';
import { TypeSpecimen } from '@mui/icons-material';

type ProductCardProp = {
  imageUrl: string;
  title: string;
  rating: number;
  description: string;
  count: number;
  price: number;
};

function ProductCard({
  imageUrl,
  title,
  rating,
  description,
  count,
  price,
}: ProductCardProp) {
  return (
    <Card
      sx={{
        maxHeight: '500px',
      }}
    >
      <CardMedia component="img" height="200px" alt="" image={imageUrl} />
      <CardContent>
        <Stack justifyContent="space-between">
          <Typography component="span" fontWeight="bold" fontSize={23}>
            {title}
          </Typography>
          <Typography component="span" fontWeight="bold" fontSize={19}>
            ${price}
          </Typography>
        </Stack>
        <Stack alignItems="center" display="flex" direction="row" spacing={2}>
          <Rating name="read-only" precision={0.1} value={rating} readOnly />{' '}
          <Typography variant="caption">({count})</Typography>
        </Stack>
        <Typography fontSize={14} sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ProductCard;

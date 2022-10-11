import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
  Rating,
  Button,
} from "@mui/material";

type ProductCardProp = {
  imageUrl: string;
  title: string;
  rating: number;
  description: string;
  count: number;
  price: number;
  id: number;
  addToCart: Function;
};

function ProductCard({
  imageUrl,
  title,
  rating,
  description,
  count,
  price,
  id,
  addToCart,
}: ProductCardProp) {
  return (
    <Card
      sx={{
        maxHeight: "500px",
      }}
    >
      <CardMedia component="img" height="200px" alt="" image={imageUrl} />
      <div className="text-center mt-10">
        <Button
          variant="outlined"
          onClick={(e) =>
            addToCart({ id: id, title: title, image: imageUrl, price: price })
          }
        >
          Add to Cart
        </Button>
      </div>

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
          <Rating name="read-only" precision={0.1} value={rating} readOnly />{" "}
          <Typography variant="caption">({count})</Typography>
        </Stack>
        <Typography fontSize={14} sx={{ color: "text.secondary" }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ProductCard;

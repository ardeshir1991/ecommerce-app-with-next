import React from "react";
import Link from "next/link";
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
  CardActions,
} from "@mui/material";

const Product = ({ product }) => {
  return (
    <Grid item xs={12} md={4} lg={3} style={{ marginTop: "10px" }}>
      <Card sx={{ maxWidth: 345 }}>
        <Link href={`/products/${product.slug}`}>
          <a>
            <CardActionArea>
              <CardMedia
                image={product.image}
                alt={product.name}
                component="img"
                height="200"
              />
              <CardContent style={{ textAlign: "center" }}>
                <Typography>{product.name}</Typography>
              </CardContent>
            </CardActionArea>
          </a>
        </Link>
        <CardContent style={{ textAlign: "center" }}>
          <Typography>${product.price}</Typography>
        </CardContent>
        <CardActions style={{ justifyContent: "center" }}>
          <Button>Add To Card</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Product;

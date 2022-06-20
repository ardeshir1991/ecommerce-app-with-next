import React from "react";
import { useRouter } from "next/router";
import data from "../../utils/data";
import Layout from "../../components/Layout";
import Link from "next/link";
import { Grid, List, ListItem, Typography, Card, Button } from "@mui/material";
import Image from "next/image";

export default function SingleProduct() {
  const { query } = useRouter();
  const { slug } = query;
  const product = data.find((product) => product.slug === slug);
  if (!product) {
    return <div>No Product Has Found!</div>;
  }
  return (
    <Layout title={product.name} description={product.description}>
      <div style={{ marginTop: "15px", marginBottom: "15px" }}>
        <Link href="/">
          <a>
            <Typography
              variant="h6"
              style={{ marginBottom: "10px", color: "#636e72" }}
            >
              Back To Product
            </Typography>
          </a>
        </Link>
        <Grid container spacing={2}>
          <Grid item md={6} xs={12}>
            <Image
              src={product.image}
              alt={product.name}
              width={640}
              height={640}
              layout="responsive"
            ></Image>
          </Grid>
          <Grid item md={3} xs={12}>
            <List>
              <ListItem>
                <Typography
                  variant="h1"
                  style={{ fontSize: "1.5rem", fontWeight: "bold" }}
                >
                  {product.name}
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>Brand: {product.brand}</Typography>
              </ListItem>
              <ListItem>
                <Typography>Category: {product.category}</Typography>
              </ListItem>
              <ListItem>
                <Typography>
                  Rating: {product.rating} stars from {product.numReviews}{" "}
                  reviews
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="h6">
                  Description: {product.description}
                </Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card>
              <List>
                <ListItem>
                  <Grid xs={6}>Price:</Grid>
                  <Grid xs={6}>${product.price}</Grid>
                </ListItem>
                <ListItem>
                  <Grid xs={6}>Status:</Grid>
                  <Grid xs={6}>
                    {product.countInStock > 0 ? "Available" : "Unavailable"}
                  </Grid>
                </ListItem>
                <ListItem>
                  <Button fullWidth variant="contained" color="primary">
                    Add To Card
                  </Button>
                </ListItem>
              </List>
            </Card>
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
}

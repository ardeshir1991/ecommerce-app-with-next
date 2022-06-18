import { Grid } from "@mui/material";
import Layout from "../components/Layout";
import Product from "../components/product/Product";
import data from "../utils/data";

export default function Home() {
  return (
    <Layout>
      <div style={{ marginTop: "10px" }}>
        <Grid container spacing={3}>
          {data.map((product) => (
            <Product product={product} key={product.slug} />
          ))}
        </Grid>
      </div>
    </Layout>
  );
}

import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import NextLink from "next/link";

import Layout from "../components/Layout";
import db from "../utilities/db";
import Product from "../models/Product";

export default function Home(props) {
  const { allProducts } = props;
  return (
    <Layout>
      <div>
        <h1>Product</h1>
        <Grid container spacing={3}>
          {allProducts.map((product, i) => (
            <Grid item md={4} key={i}>
              <Card>
                <NextLink href={`/product/${product.slug}`} passHref>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={product.image}
                      title={product.name}
                      alt={`Brand Name ${product.name} Brand Category${product.category} Brand Price ${product.price} Description ${product.description}`}
                    ></CardMedia>
                    <CardContent>
                      <Typography>{product.name}</Typography>
                    </CardContent>
                  </CardActionArea>
                </NextLink>
                <CardActions>
                  <Typography>{`$${product.price}`}</Typography>
                  <Button>Add to Cart</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  await db.connect();
  const allProducts = await Product.find({}).lean();
  await db.disconnect();
  return {
    props: {
      allProducts: allProducts.map(db.convertDocToObj),
    },
  };
}

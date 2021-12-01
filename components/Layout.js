import React, { Children } from "react";
import Head from "next/head";
import NextLink from "next/link";
import {
  AppBar,
  Container,
  Link,
  Toolbar,
  Typography,
} from "@material-ui/core";
import useStyle from "../utilities/style";

export default function Layout({ children }) {
  const classes = useStyle();

  return (
    <div>
      <Head>
        <title>Green Roads</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <NextLink href="/" passHref>
            <Link>
              <Typography className={classes.brand}>Green Roads</Typography>
            </Link>
          </NextLink>
          <div className={classes.grow}></div>
          <div>
            <NextLink href="/cart" passHref>
              <Link>Cart</Link>
            </NextLink>
            <NextLink href="/login" passHref>
              <Link>Login</Link>
            </NextLink>
          </div>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography>2021 © Green Roads. All Rights Reserved.</Typography>
      </footer>
    </div>
  );
}

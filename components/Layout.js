import React, { Children } from "react";
import Head from "next/head";
import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Green Roads</title>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography>Green Roads</Typography>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
      <footer>
        <Typography>2021 © Green Roads. All Rights Reserved.</Typography>
      </footer>
    </div>
  );
}

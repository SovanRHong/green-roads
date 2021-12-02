import React, { useContext } from "react";
import Head from "next/head";
import NextLink from "next/link";
import {
  AppBar,
  Container,
  Link,
  Toolbar,
  Typography,
  createTheme,
  ThemeProvider,
  CssBaseline,
  Switch,
} from "@material-ui/core";
import useStyle from "../utilities/style";
import { Store } from "../utilities/Store";
import Cookies from "js-cookie";

export default function Layout({ children, title, description }) {
  const { state, dispatch } = useContext(Store);
  const { darkMode } = state;
  const classes = useStyle();
  const theme = createTheme({
    typography: {
      h1: {
        fontSize: "1.6rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
      h2: {
        fontSize: "1.4rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
    },
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        main: "#1DB84F",
      },
      secondary: {
        main: "#1DB84F",
      },
    },
  });

  const darkModeChangeHandler = () => {
    dispatch({ type: darkMode ? "DARK_MODE_OFF" : "DARK_MODE_ON" });
    const darkModeValue = !darkMode;
    Cookies.set("darkMode", darkModeValue ? "ON" : "OFF");
  };

  return (
    <div>
      <Head>
        <title>{title ? `${title} - Green Roads` : "Green Roads"}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static" className={classes.navbar}>
          <Toolbar>
            <NextLink href="/" passHref>
              <Link>
                <Typography className={classes.brand}>Green Roads</Typography>
              </Link>
            </NextLink>
            <div className={classes.grow}></div>
            <div>
              <Switch
                checked={darkMode}
                onChange={darkModeChangeHandler}
              ></Switch>
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
      </ThemeProvider>
    </div>
  );
}

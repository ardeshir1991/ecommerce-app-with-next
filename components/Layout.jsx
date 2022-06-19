import Head from "next/head";
import React from "react";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import styles from "./layout.module.css";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Ecommerce App</title>
      </Head>
      <AppBar position="static" className={styles.navbar}>
        <Toolbar>
          <Link href="/">
            <a>
              <Typography variant="h4" className={styles.title}>
                amazona
              </Typography>
            </a>
          </Link>
        </Toolbar>
        <div className={styles.cartLoginContainer}>
          <Link href="/cart">
            <a>
              <Typography variant="h6">Cart</Typography>
            </a>
          </Link>
          <Link href="/login">
            <a>
              <Typography variant="h6">Login</Typography>
            </a>
          </Link>
        </div>
      </AppBar>
      <Container className={styles.main}>{children}</Container>
      <footer>
        <Typography align="center" variant="h6">
          All Rights Reserved
        </Typography>
      </footer>
    </div>
  );
};

export default Layout;

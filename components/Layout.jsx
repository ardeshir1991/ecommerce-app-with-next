import Head from "next/head";
import React from "react";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import styles from "./layout.module.css";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Ecommerce App</title>
      </Head>
      <AppBar position="static" className={styles.navbar}>
        <Toolbar>
          <Typography className={styles.title}>amazona</Typography>
        </Toolbar>
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

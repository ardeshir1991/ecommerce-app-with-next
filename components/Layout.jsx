import Head from "next/head";
import React from "react";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import styles from "./layout.module.css";
import Link from "next/link";
import { styled } from "@mui/system";

const MyAppBar = styled(AppBar)({
  backgroundColor: "#636e72",
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "row",
});

const Layout = ({ title, description, children }) => {
  return (
    <div>
      <Head>
        <title>{title ? `${title}-Ecommerce App` : "Ecommerce App"}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>

      <MyAppBar position="static">
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
      </MyAppBar>
      <Container className={styles.main}>{children}</Container>
      <footer style={{ marginTop: "10px" }}>
        <Typography align="center" variant="body1">
          All Rights Reserved
        </Typography>
      </footer>
    </div>
  );
};

export default Layout;

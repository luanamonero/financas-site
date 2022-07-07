import { Container } from '@mui/material';
import Box from "@mui/material/Box";
import * as React from 'react';
import AppAppBar from '../views/AppAppBar';
import logo from "../assets/logo.png";
import Typography from "../components/Typography";


function Shop() {
  return (
    <>
      <AppAppBar />
      <Container>
      <Box
        component="img"
        sx={{
          height: 250,
          display: "flex",
          margin: "auto",
          marginTop: "30px",
          paddingBlockEnd: 2
        }}
        alt="Your logo."
        src={logo}
      />
      <Typography variant="h4" marked="center" align="center" component="h2">
        Em breve novidades 👀
      </Typography>
      </Container>
    </>
  );
}

export default Shop;
import { Container } from '@mui/material';
import * as React from 'react';
import AppAppBar from '../views/AppAppBar';
import RecipeReviewCard from '../components/CardProduct';
import Typography from "../components/Typography";
import AppFooter from '../views/AppFooter';


function Shop() {
  return (
    <>
      <AppAppBar />
      <Container sx={{ marginTop: "40px", marginBottom: 20 }}>
        <Typography variant="h4" marked="center" align="center" component="h2">
          Lojinha da Fênix
        </Typography>
        <Container sx={{ marginTop: 10 }}>          
          <RecipeReviewCard />
        </Container>
      </Container>
      <AppFooter/>
    </>
  );
}

export default Shop;
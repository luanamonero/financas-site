import { Container } from '@mui/material';
import * as React from 'react';
import AppAppBar from '../views/AppAppBar';
import RecipeReviewCard from '../components/CardProduct';
import Typography from "../components/Typography";
import AppFooter from '../views/AppFooter';
import ProductSmokingHero from '../views/ProductSmokingHero';


function Shop() {
  return (
    <>
      <AppAppBar />
      <Container sx={{ marginTop: "40px", marginBottom: 20 }}>
        <Typography variant="h4" marked="center" align="center" component="h2">
          Lojinha da Fênix
        </Typography>
        <RecipeReviewCard />
      </Container>
      <ProductSmokingHero link="https://api.whatsapp.com/send?phone=5521998850424" />
      <AppFooter />
    </>
  );
}

export default Shop;
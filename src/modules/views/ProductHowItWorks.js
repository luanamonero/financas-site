import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '../components/Button';
import Typography from '../components/Typography';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import SafetyDividerIcon from '@mui/icons-material/SafetyDivider';
import AddCardIcon from '@mui/icons-material/AddCard';

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

const number = {
  fontSize: 24,
  fontFamily: 'default',
  color: 'brand.yellow',
  fontWeight: 'medium',
};

const image = {
  height: 55,
  my: 4,
};

function ProductHowItWorks() {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', bgcolor: 'secondary.light', overflow: 'hidden' }}
    >
      <Container
        sx={{
          mt: 10,
          mb: 15,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          component="img"
          src="/static/themes/onepirate/productCurvyLines.png"
          alt="curvy lines"
          sx={{
            pointerEvents: 'none',
            position: 'absolute',
            top: -180,
            opacity: 0.7,
          }}
        />
        <Typography variant="h4" marked="center" component="h2" sx={{ mb: 14, textAlign: 'center' }}>
          quer se tornar nosso sócio?
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>1.</Box>
                <Box
                  sx={image}
                >
                  <SafetyDividerIcon fontSize="large"/>
                </Box>
                <Typography variant="h5" align="center">
                  Entre no site do nosso parceiro.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>2.</Box>
                <Box
                  sx={image}
                >
                  <AddCardIcon fontSize="large"/>
                </Box>
                <Typography variant="h5" align="center">
                Escolha o melhor pacote.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>3.</Box>
                <Box
                  sx={image}
                >
                  <CardGiftcardIcon fontSize="large"/>
                </Box>
                <Typography variant="h5" align="center">
                  {'Aproveite as vantagens!'}
                  {' São dezenas de descontos em produtos,viagens e estabelecimentos.'}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </div>
        <Button
          color="secondary"
          size="large"
          variant="contained"
          component="a"
          href="https://www.umais.site/siteAtletica/?q=180"
          target="_blank"
          sx={{ mt: 8 }}
        >
          ASSINAR
        </Button>
      </Container>
    </Box>
  );
}

export default ProductHowItWorks;
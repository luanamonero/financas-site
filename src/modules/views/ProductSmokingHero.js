import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Link from '@mui/material/Link';


function ProductSmokingHero() {
  return (
    <Container
      component="section"
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 9 }}
    >
      <Link href="https://api.whatsapp.com/send?phone=5521998850424" underline="none" target="_blank">
        <Button
          sx={{
            border: '4px solid currentColor',
            borderRadius: 0,
            height: 'auto',
            py: 2,
            px: 5,
          }}
        >
          <Typography variant="h4" component="span">
            Ficou com alguma dúvida?
          </Typography>
        </Button>
      </Link>
      <Typography variant="subtitle1" sx={{ my: 3, textAlign: 'center' }}>
        Entre em contato com nosso time que iremos te auxilar da melhor forma!
      </Typography>
      <Box
        sx={{ width: 60 }}
      >
        <WhatsAppIcon fontSize="large"/>
      </Box>
    </Container>
  );
}

export default ProductSmokingHero;
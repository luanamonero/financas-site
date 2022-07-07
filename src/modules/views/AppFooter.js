import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import { AiFillInstagram } from "react-icons/ai";

function Copyright() {
  return (
    <React.Fragment>
      <Typography>© Finanças UERJ {new Date().getFullYear()}</Typography>
    </React.Fragment>
  );
}

const iconStyle = {
  width: 48,
  height: 48,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "brand.yellow",
  mr: 1,
  "&:hover": {
    bgcolor: "white",
  },
};

export default function AppFooter() {
  return (
    <Typography
      component="footer"
      sx={{ display: "flex", bgcolor: "brand.red" }}
    >
      <Container sx={{ my: 8, display: "flex"}}>
        <Grid container spacing={12}>
          <Grid item xs={8} sm={4} md={3}>
            <Grid
              container
              direction="column"
              justifyContent="flex-end"
              spacing={2}
              sx={{ height: 120 }}
            >
              <Grid item sx={{ display: "flex" }}>
                <Box component="a" href="https://www.instagram.com/financasuerj" sx={iconStyle}>
                  <FacebookRoundedIcon sx={{ color: "brand.black"}}/>
                </Box>
                <Box
                  component="a"
                  href="https://www.instagram.com/financasuerj"
                  sx={iconStyle}
                >
                  <AiFillInstagram color="black" size={25}/>
                </Box>
              </Grid>
              <Grid item>
                <Copyright />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="h6" marked="left" gutterBottom>
              Navegação
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: "none", p: 0 }}>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link sx={{ color: "black"}} href="/premium-themes/onepirate/terms/">Lojinha</Link>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link sx={{ color: "black"}} href="/premium-themes/onepirate/privacy/">Home</Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}

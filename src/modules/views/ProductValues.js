import * as React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";

const item = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};

function ProductValues() {
  return (
    <Box
      component="section"
      sx={{ display: "flex", overflow: "hidden", bgcolor: "secondary.light" }}
    >
      <Container sx={{ mt: 15, mb: 30, display: "flex", position: "relative" }}>
        <Box
          component="img"
          src="/static/themes/onepirate/productCurvyLines.png"
          alt="curvy lines"
          sx={{ pointerEvents: "none", position: "absolute", top: -180 }}
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="https://svgsilh.com/svg/150163.svg"
                alt="esportes"
                sx={{ height: 80 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Muito esporte
              </Typography>
              <Typography variant="h5">
                {
                  "São mais de 8 modalidades disponíveis para você praticar e competir. "
                }

                {
                  "Tudo isso com profissionais qualificados e prontos pra ensinar!"
                }
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="https://svgsilh.com/svg/1458869.svg"
                alt="graph"
                sx={{ height: 80 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Os melhores eventos
              </Typography>
              <Typography variant="h5">
                {
                  "De isoporzinho a grandes eventos nossa equipe não para de surpreender e trazer momentos memoráveis. "
                }

                {
                  "Uma experiência completa pra você curtir com a galera depois daquela semana difícil de estudos."
                }
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="https://svgsilh.com/svg/1919561.svg"
                alt="clock"
                sx={{ height: 80 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Viagens inesquecíveis
              </Typography>
              <Typography variant="h5">
                {
                  "Já pensou viajar com seus amigos para um evento com 4 dias de festas open bar e ainda torcer para os nossos atletas? "
                }

                {
                  "Uma viagem por semestre e muitas, muitas histórias. Afinal o que acontece em Vassouras, fica em Vassouras."
                }
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductValues;

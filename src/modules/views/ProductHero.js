import * as React from "react";
import Button from "../components/Button";
import Typography from "../components/Typography";
import ProductHeroLayout from "./ProductHeroLayout";

const backgroundImage =
  "https://conteudo.imguol.com.br/c/copadomundo/2018/Imagem/1b/2018/06/23/torcidas-antes-de-duelo-belgica-x-tunisia-pela-copa-do-mundo-2018-1529754077849_v2_16x9.jpg";

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: "brand.red", // Average color of the background image.
        backgroundPosition: "center",
      }}
    >
      <img
        style={{ display: "none" }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        A maior da UERJ
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        Forjados no fogo, ressurgidos das cinzas 🔥
      </Typography>
      <Button
        variant="contained"
        size="large"
        component="a"
        href="#socio"
        sx={{ minWidth: 200 }}
      >
        saiba mais
      </Button>

    </ProductHeroLayout>
  );
}

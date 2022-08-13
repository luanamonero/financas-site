import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "../components/Button";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import logo from "../assets/fenixamarela.png";
import kit from "../assets/kit.jpg";
import camisa from "../assets/camisa.jpg";
import caneca from "../assets/caneca.jpg";
import tirante from "../assets/tirante.jpg";
import uni1 from "../assets/uni1.png";
import uni2 from "../assets/uni2.png";
import uni3 from "../assets/uni3.png";
import capa from "../assets/capa.png";
import { experimentalStyled as styled } from '@mui/material/styles';
import { Box, Container } from "@mui/material";

const products = [
  {
    description: "Kit Fênix",
    image: kit,
    url: "https://docs.google.com/forms/d/e/1FAIpQLSclBnTPx5ynQtIfO85YIzOWdjWR27Dediz_UvkYxWi2xRdSxA/viewform",
  },
  {
    description: "Camisa",
    image: camisa,
    url: "https://docs.google.com/forms/d/e/1FAIpQLSclBnTPx5ynQtIfO85YIzOWdjWR27Dediz_UvkYxWi2xRdSxA/viewform",
  },
  {
    description: "Caneca",
    image: caneca,
    url: "https://docs.google.com/forms/d/e/1FAIpQLSclBnTPx5ynQtIfO85YIzOWdjWR27Dediz_UvkYxWi2xRdSxA/viewform",
  },
  {
    description: "Tirante",
    image: tirante,
    url: "https://docs.google.com/forms/d/e/1FAIpQLSclBnTPx5ynQtIfO85YIzOWdjWR27Dediz_UvkYxWi2xRdSxA/viewform",
  },
  {
    description: "Uniformes da Fênix",
    image: capa,
    url: "https://docs.google.com/forms/d/e/1FAIpQLSf1QMOVVSIntMQbsXXk_Gxh716hSYIJFwbJCxz53ZNRIAuqhg/viewform",
  },
  {
    description: "uniforme 1",
    image: uni1,
    url: "https://docs.google.com/forms/d/e/1FAIpQLSf1QMOVVSIntMQbsXXk_Gxh716hSYIJFwbJCxz53ZNRIAuqhg/viewform",
  },
  {
    description: "uniforme 2",
    image: uni2,
    url: "https://docs.google.com/forms/d/e/1FAIpQLSf1QMOVVSIntMQbsXXk_Gxh716hSYIJFwbJCxz53ZNRIAuqhg/viewform",
  },
  {
    description: "uniforme basquete",
    image: uni3,
    url: "https://docs.google.com/forms/d/e/1FAIpQLSf1QMOVVSIntMQbsXXk_Gxh716hSYIJFwbJCxz53ZNRIAuqhg/viewform",
  },
];

const ImageRoot = styled(CardMedia)(({ theme, size }) => ({
  height: 380,
  "@media (max-width: 768px)": {
    height: 300
  }
}));

export default function RecipeReviewCard() {
  function dataAtualFormatada() {
    const data = new Date(),
      dia = data.getDate().toString().padStart(2, "0"),
      mes = (data.getMonth() + 1).toString().padStart(2, "0"), //+1 pois no getMonth Janeiro começa com zero.
      ano = data.getFullYear();
    return dia + "/" + mes + "/" + ano;
  }

  const data = dataAtualFormatada();

  return (
    <Container component="section" sx={{ mt: 8, mb: 4 }}>
      <Box sx={{ mt: 8, display: "flex", flexWrap: "wrap" }}>
        {products.map(({ description, image, url }) => (
          <Card sx={{ width: 320, m: 2}} >
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: "#b01923" }} aria-label="recipe">
                  <img src={logo} alt="logo" style={{ width: "50px" }} />
                </Avatar>
              }
              title="atleticafinancasuerj"
              subheader={data}
            />
            <ImageRoot
              component="img"
              image={image}
            />
            <CardContent>
              <Typography variant="h6" color="#423636">
                {description}
              </Typography>
            </CardContent>
            <CardActions
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <Button
                variant="contained"
                size="large"
                component="button"
                sx={{ width: "150px", height: "40px", borderRadius: "10px" }}
              >
                Esgotado
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Container>
  );
}

import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";
import logo from "../assets/logo.png";

const ImageBackdrop = styled("div")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: "#000",
  opacity: 0.5,
  transition: theme.transitions.create("opacity"),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  display: "block",
  padding: 0,
  borderRadius: 0,
  height: "40vh",
  [theme.breakpoints.down("md")]: {
    width: "100% !important",
    height: 100,
  },
  "&:hover": {
    zIndex: 1,
  },
  "&:hover .imageBackdrop": {
    opacity: 0.15,
  },
  "&:hover .imageMarked": {
    opacity: 0,
  },
  "&:hover .imageTitle": {
    border: "4px solid #b01923",
  },
  "& .imageTitle": {
    position: "relative",
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  "& .imageMarked": {
    height: 3,
    width: 18,
    background: theme.palette.brand.red,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
}));

const images = [
  {
    url: "https://img.freepik.com/fotos-gratis/alto-angulo-de-nadador-masculino-na-piscina-de-agua_23-2148687635.jpg?size=626&ext=jpg&ga=GA1.2.1435570119.1655761556",
    title: "Natação",
    width: "40%",
  },
  {
    url: "https://img.freepik.com/fotos-gratis/acao-do-jogador-de-futebol-no-estadio_1150-14598.jpg?size=626&ext=jpg&ga=GA1.2.1435570119.1655761556",
    title: "Fut Campo",
    width: "20%",
  },
  {
    url: "https://img.freepik.com/fotos-gratis/mulher-com-bola-de-basquete_23-2148435381.jpg?size=338&ext=jpg&ga=GA1.2.1435570119.1655761556",
    title: "Basquete",
    width: "40%",
  },
  {
    url: "https://img.freepik.com/fotos-gratis/jovem-homem-caucasiano-jogador-de-futebol-masculino-treinando-isolado-na-parede-rosa-azul-gradiente-com-luz-de-neon_155003-38559.jpg?size=626&ext=jpg&ga=GA1.2.1435570119.1655761556",
    title: "Futsal",
    width: "38%",
  },
  {
    url: "https://img.freepik.com/fotos-gratis/jovem-jogadora-de-volei-isolada-na-parede-branca-mulher-em-equipamentos-de-esporte-e-sapatos-ou-tenis-treinando-e-praticando-conceito-de-esporte-estilo-de-vida-saudavel-movimento-e-movimento_155003-28111.jpg?size=626&ext=jpg&ga=GA1.2.1435570119.1655761556",
    title: "Vôlei",
    width: "38%",
  },
  {
    url: "https://img.freepik.com/fotos-gratis/tenis-de-mesa-ou-ping-pong_1232-2658.jpg?size=626&ext=jpg&ga=GA1.2.1435570119.1655761556",
    title: "Tênis de Mesa",
    width: "24%",
  },
  {
    url: "https://img.freepik.com/fotos-gratis/fas-de-torcedor-torcendo-com-confetes-assistindo-evento-de-futebol-no-estadio_166273-290.jpg?size=626&ext=jpg&ga=GA1.2.1435570119.1655761556",
    title: "Torcida",
    width: "40%",
  },
  {
    url: "https://conteudo.imguol.com.br/c/esporte/bd/2021/06/16/equipe-da-noruega-no-campeonato-mundial-de-cheerleading-1623858213855_v2_900x506.jpg.webp",
    title: "Cheers",
    width: "20%",
  },
  {
    url: "https://1.bp.blogspot.com/-senoOf2EYQc/X8lta9qW_gI/AAAAAAAAJC4/QrTGOrdryPYzDiRqV6lQInwMsnJDYy4rgCLcBGAsYHQ/w640-h322/russia%2Behf%2Beuro.jpg",
    title: "Handebol",
    width: "40%",
  },
];

export default function ProductCategories() {
  return (
    <Container id="socio" component="section" sx={{ mt: 8, mb: 4 }}>
      <Box
        component="img"
        sx={{
          height: 250,
          display: "flex",
          margin: "auto",
          paddingBlockEnd: 2
        }}
        alt="Your logo."
        src={logo}
      />
      <Typography variant="h4" marked="center" align="center" component="h2">
        Um amor que não se explica
      </Typography>
      <Box sx={{ mt: 8, display: "flex", flexWrap: "wrap" }}>
        {images.map((image) => (
          <ImageIconButton
            key={image.title}
            style={{
              width: image.width,
            }}
          >
            <Box
              sx={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundSize: "cover",
                backgroundPosition: "center 40%",
                backgroundImage: `url(${image.url})`,
              }}
            />
            <ImageBackdrop className="imageBackdrop" />
            <Box
              sx={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "common.white",
              }}
            >
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className="imageTitle"
              >
                {image.title}
                <div className="imageMarked" />
              </Typography>
            </Box>
          </ImageIconButton>
        ))}
      </Box>
    </Container>
  );
}

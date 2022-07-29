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
import kit from "../assets/kit.jpeg";
import { useState } from "react";

export default function RecipeReviewCard() {
  const [color, setColor] = useState("");

  function dataAtualFormatada() {
    const data = new Date(),
      dia = data.getDate().toString().padStart(2, "0"),
      mes = (data.getMonth() + 1).toString().padStart(2, "0"), //+1 pois no getMonth Janeiro começa com zero.
      ano = data.getFullYear();
    return dia + "/" + mes + "/" + ano;
  }

  const handleColor = () => {
    setColor(color === "#b01923" ? "inherit" : "#b01923");
  };
  const data = dataAtualFormatada();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "#b01923" }} aria-label="recipe">
            <img src={logo} alt="logo" style={{ width: "50px" }} />
          </Avatar>
        }
        title="atleticafinancasuerj"
        subheader={data}
      />
      <CardMedia component="img" height="310" image={kit} alt="Paella dish" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          A espera acabou! Ontem, no Fênix Day, apresentamos o nosso primeiro
          kit de produtos, e a galera se empolgou. Composto por caneca, tirante
          e camisa, ele chegou para enlouquecer e deixar todo mundo trajado...
          Então corre pra garantir o seu. 🔥 Aproveita também pra se tornar
          sócio e garantir aquele desconto nos seus produtos. 
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon onClick={handleColor} htmlColor={color} />
        </IconButton>
        <Button
          variant="contained"
          size="large"
          target="_blank"
          component="a"
          href="https://docs.google.com/forms/d/e/1FAIpQLSclBnTPx5ynQtIfO85YIzOWdjWR27Dediz_UvkYxWi2xRdSxA/viewform"
          sx={{ width: "150px", height: "40px", borderRadius: "10px" }}
        >
          Encomendar
        </Button>
      </CardActions>
    </Card>
  );
}

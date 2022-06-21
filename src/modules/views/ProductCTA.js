import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";
import TextField from "../components/TextField";
import Snackbar from "../components/Snackbar";
import Button from "../components/Button";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";

function ProductCTA() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("esportes");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container component="section" sx={{ mt: 10, display: "flex" }}>
      <Grid container>
        <Grid item xs={12} md={6} sx={{ zIndex: 1 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              bgcolor: "brand.yellow",
              py: 8,
              px: 3,
            }}
          >
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ maxWidth: 450 }}
            >
              <Typography variant="h3" component="h3" gutterBottom>
                Quer fazer parte da atlética?
              </Typography>
              <Typography variant="h5">
                Deixe seu telefone que entraremos em contato
              </Typography>
              <TextField
                noBorder
                placeholder="(xx) xxxxx-xxxx"
                variant="standard"
                sx={{ width: "100%", mt: 3, mb: 2 }}
              />
              <TextField
                noBorder
                placeholder="email"
                variant="standard"
                sx={{ width: "100%", mt: 1, mb: 2 }}
              />
              <RadioGroup
                name="row-radio"
                row
                aria-labelledby="demo-row-radio-button-group-label"
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="esportes"
                  control={<Radio />}
                  label="Esportes"
                />
                <FormControlLabel
                  value="torcida"
                  control={<Radio />}
                  label="Torcida"
                />
                <FormControlLabel
                  value="gestao"
                  control={<Radio />}
                  label="Gestão"
                />{" "}
              </RadioGroup>
              <Button
                type="submit"
                color="primary"
                variant="contained"
                sx={{ width: "100%" }}
              >
                Enviar
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { md: "block", xs: "none" }, position: "relative" }}
        >
          <Box
            component="img"
            src="https://blog.umais.com.br/wp-content/uploads/2020/06/original-df5de95b4f90b178b6f31f0d1a621883-scaled.jpeg"
            alt="call to action"
            sx={{
              position: "absolute",
              top: -28,
              left: -28,
              right: 0,
              bottom: 0,
              width: "100%",
              maxWidth: 600,
            }}
          />
        </Grid>
      </Grid>
      <Snackbar
        open={open}
        closeFunc={handleClose}
        message="Agradecemos o interesse em fazer parte da família :)"
      />
    </Container>
  );
}

export default ProductCTA;

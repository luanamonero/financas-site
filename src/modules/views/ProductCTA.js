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
  const [email, setEmail] = React.useState(null);
  const [radio, setRadio] = React.useState(null);
  const [phone, setPhone] = React.useState(null);
  const [checked, setChecked] = React.useState();

  const options = [
    {
      label: "Esportes",
      value: "esportes",
    },
    {
      label: "Torcida",
      value: "torcida",
    },
    {
      label: "Gestão",
      value: "gestao",
    },
  ];

  const phoneMask = (value) => {
    return value
      .replace(/\D+/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{4})(\d)/, "$1-$2")
      .replace(/(\d{4})-(\d)(\d{4})/, "$1$2-$3")
      .replace(/(-\d{4})\d+?$/, "$1");
  };

  const handleChangeEmail = ({ target: { value } }) => {
    setEmail(value);
  };

  const handleChangePhone = ({ target: { value } }) => {
    setPhone(phoneMask(value));
  };

  const handleChangeRadio = (event) => {
    setRadio(event.target.value);
  };

  const handleSubmit = () => {
    setOpen(true);
  };

  const isNull = (email,phone, option) => {
    if(email !== null &&  phone !== null && option !== null) {
      return false;
    }
    return true;
  }

  const handleClose = () => {
    setOpen(false);
    setChecked(false);
    setPhone("");
    setEmail("");
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
              method="POST"
              action="https://formsubmit.co/esportesfinancas.uerj@gmail.com"
              component="form"
              onSubmit={handleSubmit}
              sx={{ maxWidth: 450 }}
            >
              <input type="hidden" name="_next" value="https://www.financasuerj.com.br/"/>
              <input type="hidden" name="_captcha" value="false"></input>
              <Typography variant="h3" component="h3" gutterBottom>
                Quer fazer parte da atlética?
              </Typography>
              <Typography variant="h5">
                Deixe seu telefone que entraremos em contato
              </Typography>
              <TextField
                value={phone}
                type="text"
                name="telefone"
                noBorder
                placeholder="(xx) xxxxx-xxxx"
                variant="standard"
                sx={{ width: "100%", mt: 3, mb: 2 }}
                onChange={handleChangePhone}
              />
              <TextField
                value={email}
                name="email"
                type="email"
                noBorder
                placeholder="Email"
                variant="standard"
                sx={{ width: "100%", mt: 1, mb: 2 }}
                onChange={handleChangeEmail}
              />
              <RadioGroup
                type="text"
                name="area"
                row
                aria-labelledby="demo-row-radio-button-group-label"
                value={radio}
                onChange={handleChangeRadio}
              >
                {options.map((opt, i) => (
                  <FormControlLabel
                    key={i}
                    value={opt.value}
                    label={opt.label}
                    control={<Radio />}
                    checked={checked}
                  />
                ))}
              </RadioGroup>
              <Button
                disabled={isNull(email, phone, radio)}
                variant="contained"
                sx={{ width: "100%" }}
                onClick={handleSubmit}
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

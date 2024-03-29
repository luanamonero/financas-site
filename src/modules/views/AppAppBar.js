import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import AppBar from "../components/AppBar";
import Toolbar from "../components/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { Link as RouterLink } from "react-router-dom";
import logo from "../assets/fenixamarela.png";

const rightLink = {
  fontSize: 16,
  color: "brand.red",
  ml: 3,
};

function AppAppBar() {
  const [state, setState] = React.useState({
    mobileView: false,
  });

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { mobileView } = state;

  React.useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  function displayMobile() {
    return (
      <Toolbar sx={{ justifyContent: "space-around", color: "brand.red" }}>
        <Link
          variant="h6"
          underline="none"
          color="inherit"
          href="/"
          sx={{ fontSize: 24 }}
        >
          {"finanças uerj"}
        </Link>
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={open ? "long-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
          sx={{ color: "brand.yellow" }}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="long-menu"
          MenuListProps={{
            "aria-labelledby": "long-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <MenuItem onClick={handleClose}>
            <Link
              variant="h6"
              underline="none"
              href="https://www.instagram.com/atleticafinancasuerj"
              target="_blank"
            >
              {"Instagram"}
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <RouterLink to="/lojinha" style={{ textDecoration: "none" }}>
              <Link variant="h6" underline="none">
                {"Lojinha"}
              </Link>
            </RouterLink>
          </MenuItem>
        </Menu>
      </Toolbar>
    );
  }

  function displayDesktop() {
    return (
      <Toolbar sx={{ justifyContent: "space-around" }}>
        <Link href="/">
          <img src={logo} alt="fenix logo" style={{ width: "80px"}} />
        </Link>
        <Box sx={{ flex: 1 }} />
        <Link
          variant="h6"
          underline="none"
          color="inherit"
          href="/"
          sx={{ fontSize: 24, marginRight: "100px" }}
        >
          {"finanças uerj"}
        </Link>
        <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
          <Link
            color="brand.red"
            variant="h6"
            underline="none"
            href="https://www.instagram.com/atleticafinancasuerj"
            target="_blank"
            sx={rightLink}
          >
            {"Instagram"}
          </Link>
          <RouterLink to="/lojinha" style={{ textDecoration: "none" }}>
            <Link
              variant="h6"
              underline="none"
              sx={{ ...rightLink, color: "brand.yellow" }}
            >
              {"Lojinha"}
            </Link>
          </RouterLink>
        </Box>
      </Toolbar>
    );
  }
  return (
    <div>
      <AppBar position="fixed">
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;

import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import AppBar from "../components/AppBar";
import Toolbar from "../components/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Drawer } from "@mui/material";

const rightLink = {
  fontSize: 16,
  color: "brand.red",
  ml: 3,
};

function AppAppBar() {
  const [state, setState] = React.useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

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
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));
    return (
      <Toolbar sx={{ justifyContent: "space-around" }} >
        <Link
          variant="h6"
          underline="none"
          color="inherit"
          href="/premium-themes/onepirate/"
          sx={{ fontSize: 24}}
        >
          {"finanças uerj"}
        </Link>
        <IconButton
          {...{
            sx: { left:'10px', color: 'brand.yellow'},
            size: "large",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>
        
      
      </Toolbar>
    );
  }

  function displayDesktop() {
    return (
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box sx={{ flex: 1 }} />
        <Link
          variant="h6"
          underline="none"
          color="inherit"
          href="/premium-themes/onepirate/"
          sx={{ fontSize: 24 }}
        >
          {"finanças uerj"}
        </Link>
        <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
          <Link
            color="brand.red"
            variant="h6"
            underline="none"
            href="/premium-themes/onepirate/sign-in/"
            sx={rightLink}
          >
            {"Instagram"}
          </Link>
          <Link
            variant="h6"
            underline="none"
            href="https://www.cheersshop.com.br/atl%C3%A9tica-ime-uerj~387"
            target="_blank"
            sx={{ ...rightLink, color: "brand.yellow" }}
          >
            {"Lojinha"}
          </Link>
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

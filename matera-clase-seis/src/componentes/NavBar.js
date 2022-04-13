import logo from "../images/marmota2.png";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Cart from "./CartWidget";

export default function NavBar() {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <header className="Header">
      <figure className="LogoContainer">
        <img src={logo} alt="" className="Logo"></img>{" "}
      </figure>
      <Box className="NavBar" sx={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="#888"
          indicatorColor="primary"
          aria-label="secondary tabs example"
        >
          <Tab value="one" label="Catálogo" className="MenuOptions" />
          <Tab value="two" label="Sobre Nosotros" className="MenuOptions" />
          <Tab value="three" label="Contacto" className="MenuOptions" />
        </Tabs>
      </Box>
      <Cart />
    </header>
  );
}

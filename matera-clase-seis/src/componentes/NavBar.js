import logo from "../images/marmota2.png";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Cart from "./CartWidget";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <header className="Header">
      <Link to="/">
        <figure className="LogoContainer">
          <img src={logo} alt="" className="Logo"></img>{" "}
        </figure>
      </Link>
      <Box className="NavBar" sx={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="#888"
          indicatorColor="primary"
          aria-label="secondary tabs example"
        >
          <Link to="/category/tablas" className="Link">
            <Tab value="one" label="tablas" className="MenuOptions" />
          </Link>
          <Link to="/category/trajes" className="Link">
            <Tab value="two" label="trajes" className="MenuOptions" />
          </Link>
          <Link to="/category/accesorios" className="Link">
            <Tab value="three" label="accesorios" className="MenuOptions" />
          </Link>
        </Tabs>
      </Box>
      <Cart />
    </header>
  );
}

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
      <div className="NavBar" sx={{ width: "100%" }}>
        <Link to="/category/tablas" className="Link">
          TABLAS
        </Link>
        <Link to="/category/trajes" className="Link">
          TRAJES
        </Link>
        <Link to="/category/accesorios" className="Link">
          ACCESORIOS
        </Link>
      </div>
      <Cart />
    </header>
  );
}

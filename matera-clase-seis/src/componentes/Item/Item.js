import React from "react";
import { Link } from "react-router-dom";
//import ItemCount from "../ItemCount";

const Item = ({ product }) => {
  return (
    <div className="Card">
      <img src={product.img} alt={product.name} className="CardImage" />
      <div className="CardInfo">
        <h3>{product.name}</h3>
        <h4>U${product.price}</h4>
        <h5 className="Category">#{product.category}</h5>
        <Link to={`/item/${product.id}`} className="DetalleButton">
          Ver detalle
        </Link>
      </div>
    </div>
  );
};

export default Item;

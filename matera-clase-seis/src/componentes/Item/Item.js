import React from "react";
//import ItemCount from "../ItemCount";

const Item = ({ product }) => {
  return (
    <div className="Card">
      <img src={product.img} alt={product.name} className="CardImage" />
      <div className="CardInfo">
        <h3>{product.name}</h3>
        <h4>U${product.price}</h4>
        <h5>#{product.category}</h5>
        <button className="DetalleButton">Ver detalle</button>
      </div>
    </div>
  );
};

export default Item;

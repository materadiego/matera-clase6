import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ producto }) => {
  return (
    <div className="ItemDetail">
      <img src={producto.img} alt={producto.name} />
      <div className="ItemDetailInfo">
        <h2>Modelo: {producto.name}</h2>
        <h2>Precio: U${producto.price}</h2>
        <ItemCount stockMax={producto.stock} />
      </div>
    </div>
  );
};

export default ItemDetail;

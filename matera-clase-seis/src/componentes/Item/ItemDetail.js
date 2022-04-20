import React, { useState } from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ ...producto }) => {
  const [number, setNumber] = useState(1);

  const addCart = (cantidad) => {
    setNumber(cantidad);
  };

  console.log(number);

  return (
    <div className="ItemDetail">
      <img src={producto.img} alt={producto.name} />
      <div className="ItemDetailInfo">
        <h2>Modelo: {producto.name}</h2>
        <h2>Precio: U${producto.price}</h2>
        <ItemCount stockMax={producto.stock} addCart={addCart} />
      </div>
    </div>
  );
};

export default ItemDetail;

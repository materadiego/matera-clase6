import React, { useState } from "react";

export default function ItemCount(props) {
  const [stock, setStock] = useState(1);

  const handleClickAdd = () => {
    if (stock < props.stockMax) {
      setStock(stock + 1);
    }
  };

  const handleClickRemove = () => {
    if (stock > 1) {
      setStock(stock - 1);
    }
  };

  function onAdd(){
    alert ('Usted agregó ' + stock + ' unidades al carrito');
  }



  console.log("render");

  return (
    <div className="ItemCount">
      <button className="ItemCountButton" onClick={handleClickRemove}>
        {" "}
        -{" "}
      </button>
      <p className="ItemCountNumber">{stock}</p>
      <button className="ItemCountButton" onClick={handleClickAdd}>
        {" "}
        +{" "}
      </button>
      
      <button onClick={onAdd} className="AgregarCarrito">Agregar al carrito</button>
      
    </div>
  );
}
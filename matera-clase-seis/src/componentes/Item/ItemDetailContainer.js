import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { traerProducto } from "../../utils/products";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});

  useEffect(() => {
    traerProducto().then((res) => {
      setProducto(res);
    });
  }, []);
  //console.log(producto);

  return (
    <>
      <ItemDetail producto={producto} />
    </>
  );
};

export default ItemDetailContainer;

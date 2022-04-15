import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { traerProducto } from "../../utils/products";
import ItemListContainer from "./ItemListContainer";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    traerProducto()
      .then((res) => {
        setProducto(res);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setLoading(false);
      });
  }, []);
  //console.log(producto);

  return (
    <>
      {loading ? (
        <h2>Cargando productos</h2>
      ) : (
        <ItemDetail producto={producto} />
      )}
      <ItemListContainer />
    </>
  );
};

export default ItemDetailContainer;

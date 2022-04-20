import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { traerProducto } from "../../utils/products";
import ItemListContainer from "./ItemListContainer";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    traerProducto(id)
      .then((res) => {
        setProducto(res);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setLoading(false);
      });
  }, [id]);
  //console.log(producto);

  return (
    <>
      {loading ? <h2>Cargando productos</h2> : <ItemDetail {...producto} />}
      <ItemListContainer />
    </>
  );
};

export default ItemDetailContainer;

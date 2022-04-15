import React, { useEffect, useState } from "react";
import { traerProductos } from "../../utils/products";
import ItemList from "./ItemsList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();
  console.log(categoryId);

  useEffect(() => {
    traerProductos(categoryId)
      .then((res) => setProducts(res))
      .catch((error) => console.log(error))
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <>
      {loading ? <h2>Cargando productos</h2> : <ItemList products={products} />}
    </>
  );
};

export default ItemListContainer;

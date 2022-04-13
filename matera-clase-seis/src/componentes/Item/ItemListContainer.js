import React, { useEffect, useState } from "react";
import { traerProductos } from "../../utils/products";
import ItemList from "./ItemsList";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    traerProductos()
      .then((res) => setProducts(res))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <ItemList products={products} />
    </>
  );
};

export default ItemListContainer;

// import ItemCount from "./ItemCount";

// export default function ItemListContainer(props) {
//   const { stockMax } = props;

//   return (
//     <div className="ItemListContainer">
//       <h2>
//         Item Counter
//         <br />
//         Stock: 7
//       </h2>

//       <ItemCount stockMax={7} onAdd />
//     </div>
//   );
// }

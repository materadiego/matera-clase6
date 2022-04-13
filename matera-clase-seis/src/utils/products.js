const products = [
  {
    id: 1,
    category: "Tablas",
    stock: 5,
    name: "Retro Fish 6.0",
    price: 150,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOAVNJT1tqPTIgwgV4Av17U9TWIRzy1lsHQg&usqp=CAU",
  },
  {
    id: 2,
    category: "Tablas",

    stock: 7,

    name: "Short Board 5.8",
    price: 180,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBmpT7uiKgHQl0roxPGkbFETNva_vnHx39ZQ&usqp=CAU",
  },
];

const product = {
  id: 1,
  category: "Tablas",
  stock: 8,
  name: "Retro Fish 6.0",
  price: 150,
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOAVNJT1tqPTIgwgV4Av17U9TWIRzy1lsHQg&usqp=CAU",
};

export const traerProductos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};

export const traerProducto = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(product);
    }, 2000);
  });
};

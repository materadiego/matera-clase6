const products = [
  {
    id: 1001,
    category: "tablas",
    stock: 5,
    name: "Retro Fish 6.0",
    price: 150,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOAVNJT1tqPTIgwgV4Av17U9TWIRzy1lsHQg&usqp=CAU",
  },
  {
    id: 1002,
    category: "tablas",
    stock: 7,
    name: "Short Board 5.8",
    price: 180,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBmpT7uiKgHQl0roxPGkbFETNva_vnHx39ZQ&usqp=CAU",
  },
  {
    id: 2001,
    category: "trajes",
    stock: 20,
    name: "Traje Neoprene 3.2mm",
    price: 210,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7cjY66EMweiIWfKFLaJPEr87SsZbJdrZChA&usqp=CAU",
  },
  {
    id: 2002,
    category: "trajes",
    stock: 10,
    name: "Traje Neoprene 4.3mm",
    price: 290,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6vueFs5JNxnxWn45VIwJeGXsQlrbjzrpNeA&usqp=CAU",
  },
  {
    id: 3001,
    category: "accesorios",
    stock: 25,
    name: "Leash 3m",
    price: 50,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd44hdDYDeXydegUFTVn3UoOG1tG-bKhLeNQ&usqp=CAU",
  },
  {
    id: 3002,
    category: "accesorios",
    stock: 11,
    name: "Quillas x3U",
    price: 180,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ7Va3NA8eBokwV7EbMNkZ4B9wmigw-EjaBw&usqp=CAU",
  },
];

export const traerProductos = (categoryId) => {
  return new Promise((resolve, reject) => {
    const productosFiltrados = products.filter(
      (producto) => producto.category === categoryId
    );
    setTimeout(() => {
      if (categoryId) {
        resolve(productosFiltrados);
      } else {
        resolve(products);
      }
    }, 2000);
  });
};

export const traerProducto = (id) => {
  return new Promise((resolve, reject) => {
    const productoElegido = products.find(
      (producto) => producto.id === Number(id)
    );
    setTimeout(() => {
      resolve(productoElegido);
    }, 2000);
  });
};

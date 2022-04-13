import cart from "../images/carrito.png";

export default function Cart() {
  return (
    <>
      <div className="ContenedorCarrito">
        <img src={cart} alt="" className="Carrito"></img>
        <div className="Numero">(0)</div>
      </div>
    </>
  );
}

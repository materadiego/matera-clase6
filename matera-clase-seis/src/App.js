import "./App.css";
import ItemDetailContainer from "./componentes/Item/ItemDetailContainer";
import ItemListContainer from "./componentes/Item/ItemListContainer";
import NavBar from "./componentes/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemDetailContainer />

      <ItemListContainer />
    </div>
  );
}

export default App;

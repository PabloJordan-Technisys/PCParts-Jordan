import { Footer } from "./components/footer/Footer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemDetailContainer />
      <ItemListContainer />

      <Footer />
    </div>
  );
}

export default App;

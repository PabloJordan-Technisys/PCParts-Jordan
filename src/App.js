import { Footer } from "./components/footer/Footer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { ItemCount } from "./components/ItemCount/ItemCount";
import { FetchApi } from "./ApiCall/FetchApi";

function App() {
  return (
    <div className="App">
      <NavBar />

      <ItemListContainer />
      <ItemCount stock="8" />
      <Footer />
    </div>
  );
}

export default App;

import { Footer } from "./components/footer/Footer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { ItemCount } from "./components/ItemCount/ItemCount";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Este es el greeting dentro del itemlistcontainer" />
      <ItemCount stock="10" />
      <Footer />
    </div>
  );
}

export default App;

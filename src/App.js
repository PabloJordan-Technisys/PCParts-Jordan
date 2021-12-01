import { Contador } from "./components/desafios/Contador";
import { Footer } from "./components/footer/Footer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Este es el greeting" />
      <Contador />

      <Footer />
    </div>
  );
}

export default App;

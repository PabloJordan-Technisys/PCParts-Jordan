import { CartWidget } from "../CartWidget/CartWidget";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <header className="navbar">
      <h1 className="tituloNav">TechnoArg</h1>
      <nav className="nav">
        <ul className="ulNav">
          <li className="linav">Inicio</li>
          <li className="linav">Impresoras 3D</li>
          <li className="linav">Placas de Video</li>
          <li className="linav">Set VR</li>
        </ul>
      </nav>
      <CartWidget />
    </header>
  );
};

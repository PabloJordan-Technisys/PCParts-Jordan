import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <header className="navbar px-5">
      <Link to="/">
        <h1 className="tituloNav">TechnoArg</h1>
      </Link>
      <nav className="navNavbar">
        <ul className="ulNav">
          <li className="linav">
            <Link to="/categoria/impresora">Impresoras 3D</Link>
          </li>
          <li className="linav">
            <Link to="/categoria/vga">Placas de Video</Link>
          </li>
          <li className="linav">
            <Link to="/categoria/vr">Set VR</Link>
          </li>
        </ul>
      </nav>
      <Link to="/cart">
        <CartWidget />
      </Link>
    </header>
  );
};

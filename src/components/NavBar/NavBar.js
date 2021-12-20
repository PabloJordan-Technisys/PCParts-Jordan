import "./NavBar.css";

import { CartWidget } from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <header className="navbar px-5">
      <Link style={{ textDecoration: "none", color: "white" }} to="/">
        <h1 className="tituloNav">TechnoArg</h1>
      </Link>
      <nav className="navNavbar">
        <ul className="ulNav">
          <li className="linav">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/categoria/impresora"
            >
              Impresoras 3D
            </Link>
          </li>
          <li className="linav">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/categoria/vga"
            >
              Placas de Video
            </Link>
          </li>
          <li className="linav">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/categoria/vr"
            >
              Set VR
            </Link>
          </li>
        </ul>
      </nav>
      <Link style={{ textDecoration: "none", color: "white" }} to="/cart">
        <CartWidget />
      </Link>
    </header>
  );
};

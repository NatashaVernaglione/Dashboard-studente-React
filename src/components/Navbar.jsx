import { Link } from "react-router-dom";
import "../styles/Navbar.css"

function Navbar() {
  return (
    <nav className="navbar-app">
      <Link to="/">Dashboard</Link>
      {" | "}
      <Link to="/colloquio">Proposta a colloquio</Link>
    </nav>
  );
}

export default Navbar;
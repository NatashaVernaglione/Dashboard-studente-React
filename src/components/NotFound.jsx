import { Link } from "react-router-dom";
import "../styles/NotFound.css"

function NotFound() {
  return (
    <div className="not-found">
      <h2>Pagina non trovata</h2>
      <Link to="/">Torna alla dashboard</Link>
    </div>
  );
}

export default NotFound;
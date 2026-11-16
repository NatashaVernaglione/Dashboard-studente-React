import DatiStudente from "../components/DatiStudente";
import Valutazioni from "../components/Valutazioni";
import Frequenza from "../components/Frequenza";
import "../styles/Dashboard.css"

function Dashboard({ studente }) {
  return (
    <div className="dashboard">
      <h1>Riepilogo valutazione studente</h1>
      <DatiStudente
        nome={studente.nome}
        cognome={studente.cognome}
        eta={studente.eta}
        corso={studente.corso}
        codiceClasse={studente.codiceClasse}
        className="dati-studente"
      />
      <Valutazioni valutazioni={studente.valutazioni} className="valutazioni" />
      <Frequenza percentuale={studente.frequenza} className="frequenza" />
    </div>
  );
}

export default Dashboard;
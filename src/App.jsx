import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import PropostaColloquio from "./pages/PropostaColloquio";
import NotFound from "./components/NotFound";

const studente = {
  nome: "Mario",
  cognome: "Rossi",
  eta: 17,
  corso: "Informatica",
  codiceClasse: "4A",
  valutazioni: [
    { argomento: "Matematica", voto: 7 },
    { argomento: "Italiano", voto: 8 },
    { argomento: "Inglese", voto: 6 },
    { argomento: "Informatica", voto: 9 },
  ],
  frequenza: 92,
};

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard studente={studente} />} />
        <Route path="/colloquio" element={<PropostaColloquio />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
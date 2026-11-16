import "../styles/DatiStudente.css"

function DatiStudente({ nome, cognome, eta, corso, codiceClasse }) {
  return (
    <section className="dati-studente">
      <h2>Dati anagrafici</h2>
      <p>Nome e cognome: {nome} {cognome}</p>
      <p>Età: {eta}</p>
      <p>Corso di studi: {corso}</p>
      <p>Codice classe: {codiceClasse}</p>
    </section>
  );
}

export default DatiStudente;
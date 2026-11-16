import "../styles/Frequenza.css"

function Frequenza({ percentuale }) {
  return (
    <section className="frequenza">
      <h2>Frequenza</h2>
      <p>{percentuale}%</p>
    </section>
  );
}

export default Frequenza;
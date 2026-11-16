import "../styles/Valutazioni.css"

function Valutazioni({ valutazioni }) {
  return (
    <section className="valutazioni">
      <h2>Valutazioni</h2>
      <ul>
        {valutazioni.map((v) => (
          <li key={v.argomento}>
            {v.argomento}: {v.voto}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Valutazioni;
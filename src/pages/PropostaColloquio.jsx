import { useState } from "react";
import "../styles/PropostaColloquio.css"

function PropostaColloquio() {
  const [scelta, setScelta] = useState("");
  const [testo, setTesto] = useState("");

  const salva = () => {
    localStorage.setItem("propostaColloquio", testo);
    alert("Proposta salvata con successo!");
  };

  return (
    <section className="proposta">
      <h2>Proposta a colloquio</h2>

      <label>
        <input
          type="radio"
          name="colloquio"
          value="Sì"
          checked={scelta === "Sì"}
          onChange={(e) => setScelta(e.target.value)}
        />
        Sì
      </label>

      <label>
        <input
          type="radio"
          name="colloquio"
          value="No"
          checked={scelta === "No"}
          onChange={(e) => setScelta(e.target.value)}
        />
        No
      </label>

      {scelta === "Sì" && (
        <div>
          <textarea
            value={testo}
            onChange={(e) => setTesto(e.target.value)}
            placeholder="Scrivi la proposta..."
          />
          <button onClick={salva}>Salva</button>
        </div>
      )}
    </section>
  );
}

export default PropostaColloquio;
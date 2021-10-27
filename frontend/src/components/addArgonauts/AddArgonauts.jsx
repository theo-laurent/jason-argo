import "./addArgonauts.css";
import { useState } from "react";

export default function AddArgonauts() {
  const [argonaut, setArgonaut] = useState("");

  const submit = function (e) {
    e.preventDefault();

    fetch("http://localhost:4200/api/argo/", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json", 
      },
      body: JSON.stringify({ nom: argonaut }),
    });
  };

  return (
    <div className="addArgonautsContainer">
      <h2>Ajouter un(e) Argonaute</h2>
      <form className="addArgonautsContainer__form" onSubmit={submit}>
        <h3>Nom de l'Argonaute</h3>
        <input
          required
          placeholder="Charalampos"
          value={argonaut}
          onChange={function (e) {
            setArgonaut(e.target.value);
          }}
        />
        <button>Envoyer</button>
      </form>
    </div>
  );
}

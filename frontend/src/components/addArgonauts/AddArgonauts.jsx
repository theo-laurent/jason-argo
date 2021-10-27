import "./addArgonauts.css";
import { useState } from "react";

export default function AddArgonauts(props) {
  const [argonaut, setArgonaut] = useState("");

  const submit = function (e) {
    e.preventDefault();

    fetch("http://localhost:4200/api/argo/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nom: argonaut }),
    })
      .then(function (res) {
        return res.json();
      })
      .then(function () {
        props.setRefresh(!props.refresh);
        setArgonaut("");
      })
      .catch(function (error) {
        console.log(error);
        alert("L'Argonaute n'a pas pu embarquer !");
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

import "./getArgonauts.css";
// react
import { useEffect, useState } from "react";
// module extra
import { v4 as uuidv4 } from "uuid";
// import others components
import DeleteArgonaut from "../deleteArgonaut/DeleteArgonaut";

export default function GetArgonauts(props) {
  const [argonauts, setArgonauts] = useState([]);
  const [toggle, setToggle] = useState();

  useEffect(
    function () {
      fetch("http://localhost:4200/api/argo", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
        .then(function (res) {
          return res.json();
        })
        .then(function (data) {
          setArgonauts(data);
        })
        .catch(function (error) {
          console.log(error);
          alert("Problème de communication avec le serveur");
        });
    },
    [props.refresh, toggle]
  );

  return (
    <div className="getArgonautsContainer">
      <h2>Membres de l'équipage</h2>
      <div className="getArgonautsContainer__liste">
        {argonauts.map(function (argonaut) {
          return (
            <div key={uuidv4()} className="getArgonautsContainer__card">
              <p> {argonaut.nom}</p>
              <DeleteArgonaut
                id={argonaut._id}
                toggle={toggle}
                setToggle={setToggle}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

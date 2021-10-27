import "./deleteArgonaut.css";
// import icon from react icons
import { AiOutlineDelete } from "react-icons/ai";

export default function DeleteArgonaut(props) {
  const click = function (e) {
    e.preventDefault();

    fetch("http://localhost:4200/api/argo/", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: props.id }),
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        alert(data.message);
        props.setToggle(!props.toggle);
      })
      .catch(function (error) {
        console.log(error);
        alert("Impossible de débarquer l'Argonaute demandé !");
      });
  };

  return <AiOutlineDelete onClick={click} className="logoDelete" />;
}

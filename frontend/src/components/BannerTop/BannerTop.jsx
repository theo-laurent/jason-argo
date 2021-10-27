import "./bannerTop.css";
import logoWild from "../../assets/logo.png";

export default function BannerTop() {
  return (
    <div className="bannerTopContainer">
      <img src={logoWild} alt="Le logo de la Wild Code School" />
      <h1>Les Argonautes</h1>
    </div>
  );
}

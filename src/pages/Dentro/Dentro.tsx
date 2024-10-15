import "./Dentro.css";
import hamburger from "../../assets/hamburger.png";

const Dentro = () => {
  return (
    <div className="pesquisa">
      <img src={hamburger} alt="" />
      <span>PCMBR</span>
      <input type="text" />
    </div>
  );
};

export default Dentro;

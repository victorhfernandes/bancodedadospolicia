import logo from "../../assets/policia.png";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="header">
      <img src={logo} alt="" className="policia" />
      <span className="titulo">
        BANCO DE DADOS | POLICIA CÍVICO-MILITAR BRASILEIRA {"{ACESSO RESTRITO}"}
      </span>
    </div>
  );
};

export default NavBar;

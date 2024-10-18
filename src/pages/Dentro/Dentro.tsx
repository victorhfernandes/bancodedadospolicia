import "./Dentro.css";
import hamburger from "../../assets/hamburger.png";
import gif from "../../assets/loading.gif";
import search from "../../assets/search.png";
import { useState } from "react";
import Pesquisa from "../../components/Pesquisa/Pesquisa";

const Dentro = () => {
  const [pesquisa, setPesquisa] = useState("bettie boom boom");
  const [loading, setLoading] = useState(false);
  const [bettie, setBettie] = useState(false);

  function isBettie() {
    if (pesquisa === "bettie boom boom") {
      setLoading(true);
      setTimeout(() => {
        setBettie(true);
        setLoading(false);
      }, 1000);
    } else {
      setBettie(false);
    }
  }

  return (
    <>
      <div className="pesquisa">
        <div>
          <div className="imagema">
            <img className="hamburger" src={hamburger} alt="" />
            <span className="pcmbr">PCMBR</span>
          </div>
        </div>
        <div className="buscador-div">
          <div className="search-div">
            <img className="search" src={search} alt="" />
          </div>
          <input
            className="buscador"
            type="text"
            placeholder="Buscar..."
            name="pesquisa"
            value={pesquisa}
            onChange={(event) => setPesquisa(event.target.value)}
          />
          <button className="ir" onClick={isBettie}>
            IR
          </button>
        </div>
        <div className="empt"></div>
      </div>

      {loading ? (
        <div className="conteudo-busca">
          <div className="content">
            <img className="loading" src={gif} alt="" />
          </div>
        </div>
      ) : (
        <Pesquisa is={bettie} />
      )}
    </>
  );
};

export default Dentro;

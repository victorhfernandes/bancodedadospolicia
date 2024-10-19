import hamburger from "../../assets/hamburger.png";
import search from "../../assets/search.png";

function PCMBR() {
  return (
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
        />
        <button className="ir">IR</button>
      </div>
      <div className="empt"></div>
    </div>
  );
}

export default PCMBR;

import "./Home.css";
import logo from "../../assets/policia.png";
import gif from "../../assets/loading.gif";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const home = () => {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function login() {
    const gidean = "gigi22cm@jusls.org.br";
    if (usuario === gidean) {
      setLoading(true);
      setTimeout(() => {
        navigate("/arquivos");
        setLoading(false);
      }, 2000);
    } else {
      alert("login errado faz algo?");
    }
  }

  function asterisco() {
    const tamanho = senha.length;
    const ast = "*".repeat(tamanho);
    return ast;
  }

  return (
    <>
      {loading ? (
        <div className="content">
          <img className="loading" src={gif} alt="" />
        </div>
      ) : (
        <div className="content">
          <img src={logo} alt="" />
          <div>
            <label className="labels">
              Usuário
              <input
                className="inputs"
                type="text"
                name="usuario"
                value={usuario}
                onChange={(event) => setUsuario(event.target.value)}
              />
            </label>
            <label className="labels">
              Senha
              <input
                className="inputs"
                type="text"
                name="senha"
                value={asterisco()}
                onChange={(event) => setSenha(event.target.value)}
              />
            </label>
          </div>
          <button onClick={login} className="login">
            LOGIN
          </button>
        </div>
      )}
    </>
  );
};

export default home;

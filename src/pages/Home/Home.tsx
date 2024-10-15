import "./Home.css";
import logo from "../../assets/policia.png";
import { useState } from "react";

const home = () => {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  function login() {
    const gidean = "gigi22cm@jusls.org.br";
    if (usuario === gidean) {
      alert("login certo ieeee");
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
      <div className="header">
        <img src={logo} alt="" className="policia" />
        <span className="titulo">
          BANCO DE DADOS | POLICIA CÍVICO-MILITAR BRASILEIRA{" "}
          {"{ACESSO RESTRITO}"}
        </span>
      </div>
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
    </>
  );
};

export default home;

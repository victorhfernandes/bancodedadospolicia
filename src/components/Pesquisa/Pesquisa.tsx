import { Link } from "react-router-dom";
import select from "../../assets/select.png";
import Separator from "../Separator/Separator";
import "./Pesquisa.css";

type Props = {
  is: boolean;
};

export default function Pesquisa({ is }: Props) {
  return (
    <>
      {is ? (
        <div className="topo">
          <span className="titulo-resultados">Resultados de pesquisa</span>
          <Separator />
          <div className="containner-pesquisa">
            <div className="resultados-pesquisa">
              <span className="nomenomenome">
                Foram encontrados <strong>2 resultados</strong> com a
                palavra-chave: “bettie boom boom”
              </span>
              <div className="dados-resultado">
                <Link to="/arquivos/bettie-boom-boom" className="link-text">
                  INQUERITO POLICIAL - INVESTIGAÇÃO | CC XXX15990 BR
                  XXXX-19.12.0540 - “Bettie Boom Boom”
                </Link>

                <br />
                <span className="bold-text">L13812 - IP - CC000347LS</span>
                <br />
                <span className="ementa-text">
                  ASSUNTO: Investigação de desaparecimento. Potencial homicídio.
                  Potencial sequestro. Ação declaratória de morte presumida.
                </span>
              </div>
              <div className="dados-resultado">
                <span className="link-text">
                  TJSC - APR - Betânia “Bettie Navalha” da Cruz XXX77170 BR
                  BFXX-17.09.0244
                </span>

                <br />
                <span className="bold-text">
                  JURISPRUDÊNCIA - ACÓRDÃO | APELAÇÃO CRIMINAL
                </span>
                <br />
                <span className="ementa-text">
                  EMENTA: Roubo circunstânciado. Absolvição. Impossibilidade.
                  Autoria e materialidade bem delineadas. Manutenção da casa de
                  aumento. Penas e regimes preservados. Improvimento.
                </span>
              </div>
            </div>
            <div className="outra-div">
              <img src={select} alt="" />
            </div>
          </div>
          <Separator />
          <span className="padrao-pagina pagina-flex">
            Faça uma busca por nome, palavra chave, número de processo, ou
            situação.
          </span>
        </div>
      ) : (
        <div className="conteudo-busca">
          <span className="padrao-pagina">
            Faça uma busca por nome, palavra chave, número de processo, ou
            situação.
          </span>
        </div>
      )}
    </>
  );
}

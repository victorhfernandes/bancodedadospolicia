import Separator from "../../components/Separator/Separator";
import bettie from "../../assets/bettie.png";
import ip from "../../assets/ip.png";
import "./Bettie.css";

function Bettie() {
  return (
    <div className="topo">
      <span className="titulo-resultados">
        CC XXX15990 BR XXXX-19.12.0540 - “Bettie Boom Boom”
      </span>
      <Separator />
      <span>L13812 - IP - CC000347LS </span>
      <br />
      <span>
        ASSUNTO: Investigação de desaparecimento. Potencial homicídio. Potencial
        sequestro. Ação declaratória de morte presumida.
      </span>
      <Separator />
      <div className="containner-bettie">
        <div className="resultados-bettie">
          <div className="bettie-flexsapce">
            <img src={bettie} alt="" />
            <div className="textos-bettie">
              <span>
                Vítima: nome desconhecido/sob codinome <br />
                “Bettie Boom Boom”
              </span>
              <span>Status da investigação: EM ABERTO</span>
              <span>Nº PCnet: 01010101-002-0102203-96</span>
              <span>FACT/REDS N°: 000010140-001</span>
            </div>
          </div>
          <img src={ip} alt="" />
          <span>(abrir IP completo)</span>
        </div>
        <div></div>
        <div className="outra-div-bettie">
          <span className="title-links-arquivos-bettie">
            ARQUIVOS E DOCUMENTOS:
          </span>

          <span className="links-arquivos-bettie">
            DOC_ARQ_8RVKC1¶2ERBE=SZXT5AX3XYWPX8KMP
          </span>
          <span className="links-arquivos-bettie">
            VIDEO_CAM_SEC_BBBHY2BELSSPCONF1D3TT4L1
          </span>
          <span className="links-arquivos-bettie">
            ARQUIVO_H9PNL6!A6J0S@ B!00H¶VZ57LW6##V
          </span>
          <span className="links-arquivos-bettie">
            FOTOS_6JB@Z+@2_#K9AN AN8WPCTNUWH4MOSSO
          </span>
          <span className="links-arquivos-bettie">
            ARQ2234_9BE26X74219T60 BD27A6BUAXZG3BF
          </span>
          <span className="links-arquivos-bettie">
            MOSTR4DOC_Y8UABZF!I5HER6M_J0 Z2WC0J+P7
          </span>
          <span className="links-arquivos-bettie">
            ARQUIVO_D6W#ALFFS ¶1ZSL_+34¶1#EFF2#NR0
          </span>
          <span className="links-arquivos-bettie">
            ARQUIVO_TN45FUHFD+6LF1IDGTT=CSCU5!#@HG
          </span>
          <span className="links-arquivos-bettie">
            ENCAMINHAMENTO_U_=TOW!1@JL227LFBE6AZJJ
          </span>
          <span className="links-arquivos-bettie">
            LAUD0101_XHCZRUDK6U8GO7PIC!C9S9605F0HZ
          </span>
          <span className="links-arquivos-bettie">
            SUSPPIC_36WI6XL#Q3DZ LG5WXOUGGAKQG7YW4
          </span>
        </div>
      </div>
    </div>
  );
}

export default Bettie;

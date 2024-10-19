import Separator from "../../components/Separator/Separator";
import bettie from "../../assets/bettie.png";
import foto1 from "../../assets/foto1.jpg";
import foto2 from "../../assets/foto2.jpg";
import foto3 from "../../assets/foto3.jpg";
import foto4 from "../../assets/foto4.jpg";
import foto5 from "../../assets/foto5.jpg";

import foto8 from "../../assets/foto8.jpg";
import foto9 from "../../assets/foto9.jpg";

import foto11 from "../../assets/foto11.jpg";
import foto12 from "../../assets/foto12.jpg";
import foto13 from "../../assets/foto13.jpg";

import foto15 from "../../assets/foto15.jpg";
import foto16 from "../../assets/foto16.jpg";
import foto17 from "../../assets/foto17.jpg";
import ip from "../../assets/ip.png";
import video from "../../assets/bettie vista pela ultima vez.mp4";
import "./Bettie.css";
import PCMBR from "../../components/PCMBR/PCMBR";
import { useState } from "react";

function Bettie() {
  const [modal, setModal] = useState(false);
  const [tipo, setTipo] = useState(true);
  const [pag, setPag] = useState(0);
  const fotos = [
    foto1,
    foto2,
    foto3,
    foto4,
    foto5,
    foto8,
    foto9,
    foto11,
    foto12,
    foto13,
    foto15,
    foto16,
    foto17,
  ];

  function openModal() {
    setModal(true);
  }
  function closeModal() {
    setModal(false);
  }

  function videoOpen() {
    setTipo(true);
    openModal();
  }

  function fotosOpen() {
    setTipo(false);
    openModal();
  }

  function incrementar() {
    setPag(function (prevPag) {
      return prevPag + 1;
    }); // Incrementa o valor de 'pag'
  }

  function decrementar() {
    setPag(function (prevPag) {
      return prevPag - 1;
    }); // Decrementa o valor de 'pag'
  }

  if (pag > fotos.length - 1) {
    setPag(0);
  }
  if (pag < 0) {
    setPag(fotos.length - 1);
  }

  return (
    <>
      <PCMBR />
      <div className="topo">
        <div className="bettie-flexcol">
          <span className="titulo-resultados">
            CC XXX15990 BR XXXX-19.12.0540 - “Bettie Boom Boom”
          </span>
          <Separator />
          <span className="title-bettiel1">L13812 - IP - CC000347LS </span>
          <span>
            ASSUNTO: Investigação de desaparecimento. Potencial homicídio.
            Potencial sequestro. Ação declaratória de morte presumida.
          </span>
        </div>
        <Separator />
        <div className="containner-bettie">
          <div className="resultados-bettie">
            <div className="bettie-flexsapce">
              <img src={bettie} alt="" />
              <div className="textos-bettie">
                <span>
                  Vítima: nome desconhecido/sob codinome <br />
                  <strong>“Bettie Boom Boom”</strong>
                </span>
                <span>
                  Status da investigação:{" "}
                  <span className="green">EM ABERTO</span>
                </span>
                <span className="texto16">
                  <strong>Nº PCnet: 01010101-002-0102203-96</strong>
                </span>
                <span className="texto16">
                  <strong>FACT/REDS N°: 000010140-001</strong>
                </span>
              </div>
            </div>
            <img src={ip} alt="" />
            <span className="ipcompleto">(abrir IP completo)</span>
          </div>
          <div></div>
          <div className="outra-div-bettie">
            <span className="title-links-arquivos-bettie">
              ARQUIVOS E DOCUMENTOS:
            </span>

            <span className="links-arquivos-bettie">
              DOC_ARQ_8RVKC1¶2ERBE=SZXT5AX3XYWPX8KMP
            </span>
            <span className="links-arquivos-bettie" onClick={videoOpen}>
              VIDEO_CAM_SEC_BBBHY2BELSSPCONF1D3TT4L1
            </span>
            <span className="links-arquivos-bettie">
              ARQUIVO_H9PNL6!A6J0S@ B!00H¶VZ57LW6##V
            </span>
            <span className="links-arquivos-bettie" onClick={fotosOpen}>
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
      {modal && (
        <div className="modal">
          <div>
            <button className="close" onClick={closeModal}>
              &times;
            </button>
          </div>
          <div className="modal-content">
            {tipo ? (
              <div className="video-flex">
                <video autoPlay>
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ) : (
              <>
                <div className="video-flex">
                  <img className="foto-pequinique" src={fotos[pag]} alt="" />
                </div>
                <div className="setas-flex">
                  <span className="setas-bettie" onClick={decrementar}>
                    {"<"}
                  </span>
                  <span className="setas-bettie" onClick={incrementar}>
                    {">"}
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Bettie;

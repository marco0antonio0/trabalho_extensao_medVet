// ======== QUIZ SITE =======//

import { useState } from "react";
import style from "./style.module.css";
import { useRouter } from "next/router";
import localFont from "next/font/local";
import ReCAPTCHA from "react-google-recaptcha";
import { perguntas } from "./perguntas";
import { config_api } from "@/model/get_api";
require("dotenv").config();
const myFont_LilitaOne = localFont({
  src: "./../../fonts/LilitaOne-Regular.ttf",
  subsets: ["latin"],
});

// LondrinaSolid
const myFont_LondrinaSolid = localFont({
  src: "./../../fonts/LondrinaSolid-Regular.ttf",
  subsets: ["latin"],
});
// Função quiz
export default function Widget_quizz({ data }) {
  const r = useRouter();
  const [load, setload] = useState(false);
  const [res, setres] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [nome, setnome] = useState("");
  const [telefone, settelefone] = useState("");
  const [erro, seterro] = useState(false);
  const [erroTelefone, seterroTelefone] = useState(false);
  const [erroNome, seterroNome] = useState(false);
  const [erroCampos, seterroCampos] = useState(false);
  const type_erros = {
    erroGererico: ">> Preencha todos os campos",
    erroCampoNome: ">> Campo 'Qual seu nome' não preenchido ou incompleto",
    erroCampoTelefone:
      ">> Campo 'Numero para contato' não preenchido ou incompleto",
    erroCampoQuizz: ">> Campos de 'perguntas' não preenchido ou incompleto",
  };
  function FNclearErros() {
    seterroTelefone(false);
    seterroCampos(false);
    seterroNome(false);
    seterro(false);
  }
  return (
    <>
      <div className={style.container_0}>
        <div className={style.titulo_container}>
          <h2
            style={{
              fontFamily: `${myFont_LondrinaSolid.style.fontFamily}, cursive`,
            }}
          >
            RESPONDA O QUIZZ <br />
            PARA COMPLETAR A ADOÇÃO
          </h2>
        </div>
        {/*========================================== */}
        {/*   pergunta >> qual seu nome */}
        <div className={style.ask_container}>
          <h2>Qual seu nome?</h2>
          <input
            type="text"
            placeholder="digite seu nome"
            value={nome}
            onChange={(e) => {
              setnome(e.target.value);
              FNclearErros();
            }}
          />
        </div>
        {/*========================================== */}
        {/*   pergunta >> Numero para contato */}
        <div className={style.ask_container}>
          <h2>Numero para contato?</h2>
          <input
            type="tel"
            placeholder="ddd + numero "
            value={telefone}
            onChange={(e) => {
              settelefone(e.target.value);
              FNclearErros();
            }}
          />
        </div>
        {/*========================================== */}
        {/*   perguntas do quizz */}
        {perguntas.map((e, i) => {
          return (
            <div className={style.ask_container} key={i}>
              <h2>{`${i + 1} - ${e.pergunta}`}</h2>
              <select
                name=""
                id=""
                onChange={(e) => {
                  setres((y) => {
                    const instance = y;
                    instance[i] = e.target.value;
                    return instance;
                  });
                  FNclearErros();
                }}
              >
                <option value={null}>{"selecione"}</option>
                {e.opcoes.map((e, i) => {
                  return (
                    <option value={e[1]} key={i}>
                      {e[0]}
                    </option>
                  );
                })}
              </select>
            </div>
          );
        })}
        
        {/*================================================= */}
        <div className={style.generic_container}>
          {/*================================================= */}
          {/*           DIV mensagem de error */}
          <div
            className={` ${style.error_msg} ${
              !erroNome ? style.error_msg_disable : null
            }`}
          >
            <h2>{type_erros.erroCampoNome}</h2>
          </div>
          <div
            className={` ${style.error_msg} ${
              !erroTelefone ? style.error_msg_disable : null
            }`}
          >
            <h2>{type_erros.erroCampoTelefone}</h2>
          </div>
          <div
            className={` ${style.error_msg} ${
              !erroCampos ? style.error_msg_disable : null
            }`}
          >
            <h2>{type_erros.erroCampoQuizz}</h2>
          </div>
          {/*================================================= */}
        </div>

        {/*================================================= */}
        {/*       BTN >> enviar respostas */}
        {load ? (
          <div className={style.container_cloader}>
            <div className={style.cloader}></div>
          </div>
        ) : (
          <div
            className={style.btn_plus}
            onClick={() => {
              let pass = true;
              var cont = 0.0;
              try {
                // ===================================================
                // faz a verificação de pontos e coloca na VAR 'cont'
                if (res.length > 0) {
                  res.map((e) => {
                    if (
                      e === typeof undefined ||
                      e == "selecione" ||
                      e === null
                    ) {
                      pass = false;
                    } else {
                      cont += parseInt(e);
                    }
                  });
                } else {
                  pass = false;
                }

                // ===================================================
                // monitoramento de vars
                // ===================================================
                // seta o status true||false na vars 'erroCampos'
                seterroCampos(!pass);
                // seta o status true||false na vars 'erroNome'
                if (nome.length < 3) {
                  seterroNome(true);
                } else {
                  seterroNome(false);
                }
                // seta o status true||false na vars 'erroTelefone'
                if (telefone.length < 7) {
                  seterroTelefone(true);
                } else {
                  seterroTelefone(false);
                }
                // ===================================================
                // =============================================================
                //        verificação se campos validos >> nome e telefone e Recaptcha
                if (
                  nome.length > 3 &&
                  telefone.length >= 7 &&
                  pass 
                ) {
                  // =============================================================
                  //      verificação se pontos totais validos
                  //      Executa uma chamada de url e api
                  if (cont < 6) {
                    setload(true);
                    //=============================================================
                    //     faz o get para rota "pontuar" registrando o pedido
                    config_api
                      .getstatic(
                        `https://api-request.nova-work.cloud/api/pontuar?ia=${data.id}&n=${nome}&t=${telefone}&p=${cont}&io=${data.id_ong}&pass=HZ}2MhGJC`
                      )
                      .then((e) => {
                        r.push(
                          `/pet/pedido-resposta?dx=${cont < 0 ? 0 : cont}`
                        );
                      });
                  } else {
                    setload(true);
                    //=============================================================
                    //     faz o get para rota "pontuar" registrando o pedido
                    config_api
                      .getstatic(
                        `https://api-request.nova-work.cloud/api/pontuar?ia=${data.id}&n=${nome}&t=${telefone}&p=${cont}&io=${data.id_ong}&pass=HZ}2MhGJC`
                      )
                      .then((e) => {
                        r.push(
                          `/pet/pedido?d=${data.id}&dd=${data.id_ong}&ddd=${nome}&dx=${cont}&dddd=${telefone}`
                        );
                      });
                  }
                } else {
                  // =============================================================
                  //        caso a verificação se campos validos falhe >> nome e telefone
                  seterro(true);
                }
                // =============================================================
              } catch (error) {
                seterroCampos(true);
              }
            }}
          >
            <h3
              style={{
                fontFamily: `${myFont_LilitaOne.style.fontFamily}, cursive`,
              }}
            >
              envia respostas
            </h3>
          </div>
        )}
      </div>
    </>
  );
}

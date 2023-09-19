// ======== QUIZ SITE =======//

import { useState } from "react";
import style from "./style.module.css";
import { useRouter } from "next/router";
import localFont from "next/font/local";
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
  const [res, setres] = useState([]);
  const [nome, setnome] = useState("");
  const [telefone, settelefone] = useState("");
  const [pontos, setpontos] = useState(0);
  const [erro, seterro] = useState(false);
  const perguntas = [
    {
      pergunta: "Donec commodo non lacus quis volutpat. Cras mauris felis ?",
      opcoes: [
        ["sim", 1],
        ["nao", 0],
      ],
    },
    {
      pergunta: "Donec commodo non lacus quis volutpat. Cras mauris felis ?",
      opcoes: [
        ["sim", 1],
        ["nao", 0],
      ],
    },
    {
      pergunta: "Donec commodo non lacus quis volutpat. Cras mauris felis ?",
      opcoes: [
        ["sim", 1],
        ["nao", 0],
      ],
    },
    {
      pergunta: "Donec commodo non lacus quis volutpat. Cras mauris felis ?",
      opcoes: [
        ["sim", 1],
        ["nao", 0],
      ],
    },
    {
      pergunta: "Donec commodo non lacus quis volutpat. Cras mauris felis ?",
      opcoes: [
        ["sim", 0],
        ["nao", 1],
      ],
    },
  ];

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
        <div className={style.ask_container}>
          <h2>Qual seu nome?</h2>
          <input
            type="text"
            placeholder="digite seu nome"
            value={nome}
            onChange={(e) => {
              setnome(e.target.value);
              seterro(false);
            }}
          />
        </div>
        <div className={style.ask_container}>
          <h2>Numero para contato?</h2>
          <input
            type="number"
            placeholder="ddd + numero "
            value={telefone}
            onChange={(e) => {
              settelefone(e.target.value);
              seterro(false);
            }}
          />
        </div>
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
                  seterro(false);
                  setpontos((g) => {
                    let instance = g;
                    instance += parseInt(e.target.value);
                    return instance;
                  });
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
        <div
          className={` ${style.error_msg} ${
            !erro ? style.error_msg_disable : null
          }`}
        >
          <h2>Preencha todos os campos</h2>
        </div>
        <div
          className={style.btn_plus}
          onClick={() => {
            try {
              if (
                nome.length > 0 &&
                telefone.length > 0 &&
                res[0] >= 0 &&
                res[1] >= 0 &&
                res[2] >= 0 &&
                res[3] >= 0 &&
                res[4] >= 0 &&
                typeof res[0] != typeof undefined &&
                typeof res[1] != typeof undefined &&
                typeof res[2] != typeof undefined &&
                typeof res[3] != typeof undefined &&
                typeof res[4] != typeof undefined
              ) {
                // console.log(pontos);
                if (pontos < 3) {
                  r.push("/pet/pedido-resposta");
                } else {
                  r.push(
                    `/pet/pedido?d=${data.id}&dd=${data.id_ong}&ddd=${nome}&dddd=${telefone}`
                  );
                }
              } else {
                seterro(true);
              }
            } catch (error) {
              seterro(true);
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
      </div>
    </>
  );
}

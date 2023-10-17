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
  const [erro, seterro] = useState(false);
  const perguntas = [
    {
      pergunta:
        "Você tem consciência de que cães e gatos podem viver mais de 15 anos e que você terá total responsabilidade durante toda vida do animal?",
      opcoes: [
        ["sim", 1],
        ["nao", 0],
      ],
    },
    {
      pergunta:
        "	Você está disposto a dar uma vida ativa ao animal (passeios, interações sociais e dinâmicas)?",
      opcoes: [
        ["sim", 1],
        ["nao", 0],
      ],
    },
    {
      pergunta:
        "Você está ciente que animais possuem custos (alimentação, veterinário, acessórios e brinquedos)?",
      opcoes: [
        ["sim", 1],
        ["nao", 0],
      ],
    },
    {
      pergunta:
        "Você está ciente de que o animal é um ser irracional que durante o período de adaptação pode agir de formas imprevistas (arranhar móveis, latidos ou miados excessivos, soltura de pelos e fazer necessidades onde não deveria)?",
      opcoes: [
        ["sim", 1],
        ["nao", 0],
      ],
    },
    {
      pergunta:
        "Você se certificou se há alguém na sua residência que possui alergia a animais?",
      opcoes: [
        ["sim", 1],
        ["nao", 0],
      ],
    },
    {
      pergunta:
        "Você está ciente de que, ao adotar um animal filhote, ele pode crescer mais que o previsto?",
      opcoes: [
        ["sim", 1],
        ["nao", 0],
      ],
    },
    {
      pergunta: "Sua residência oferece segurança para o animal?",
      opcoes: [
        ["sim", 1],
        ["nao", 0],
      ],
    },
    {
      pergunta: "Você compreende a importância da castração?",
      opcoes: [
        ["sim", 1],
        ["nao", 0],
      ],
    },
    {
      pergunta:
        "Em caso de viagens, há algum responsável com quem deixar o animal?",
      opcoes: [
        ["sim", 1],
        ["nao", 0],
      ],
    },
    {
      pergunta: "Você tem certeza da adoção?",
      opcoes: [
        ["sim", 1],
        ["nao", 0],
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
              seterro(false);
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
              seterro(false);
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
                  seterro(false);
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
            let pass = true;
            var cont = 0;
            try {
              res.map((e) => {
                if (typeof e == typeof undefined || e == "selecione") {
                  pass = false;
                } else {
                  cont += parseInt(e);
                }
              });
              // =============================================================
              //        verificação se campos validos >> nome e telefone
              if (nome.length > 3 && telefone.length >= 7 && pass) {
                console.log(cont);
                seterro(false);
                // =============================================================
                //      verificação se pontos totais validos
                if (cont < 5) {
                  r.push(`/pet/pedido-resposta?dx=${cont}`);
                } else {
                  r.push(
                    `/pet/pedido?d=${data.id}&dd=${data.id_ong}&ddd=${nome}&dx=${cont}&dddd=${telefone}`
                  );
                }
              } else {
                // =============================================================
                //        caso a verificação se campos validos falhe >> nome e telefone
                seterro(true);
              }
              // =============================================================
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

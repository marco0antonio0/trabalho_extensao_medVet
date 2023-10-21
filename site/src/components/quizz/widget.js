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
      //=================================================================================================================
      pergunta:
        "Você tem consciência de que cães e gatos podem viver mais de 15 anos e que você terá total responsabilidade(legal,etica e financeira) durante toda vida do animal?",
      opcoes: [
        ["sim", 1.0],
        ["nao", 0.0],
      ],
      //=================================================================================================================
    },
    {
      //=================================================================================================================
      pergunta: "Sobre passeios e brincadeiras com o animal eu acho que:",
      opcoes: [
        [
          "Não tem necessidade de passear ou brincar com o animal pois ele(a) ja tem um esaço grande em casa",
          0.0,
        ],
        [
          "irei passear e brincar regularmente com o animal  porque vejo necessidade nisso de o animal ter uma vida ativa(passeios, interações sociais e dinâmicas)",
          1.0,
        ],
      ],
      //=================================================================================================================
    },
    {
      //=================================================================================================================
      pergunta: "Durante a vida do animal irei",
      opcoes: [
        ["concordo em arca com custos para o animal apenas alimentação", 0.5],
        [
          "concordo em arca com custos para o animal apennas alimentação,veterinario e brinquedos",
          1.0,
        ],
        [
          "não concordo em arca com custos para o animal,irei dar comida apenas quando puder",
          0.0,
        ],
      ],
      //=================================================================================================================
    },
    {
      //=================================================================================================================
      pergunta:
        "Durante os primeiros dias do animal em sua residencial, oque voce acha correto se o animalzinho agir de formas imprevistas como latir excessivamente,arranhar móveis,fazer necessidades onde não deveria",
      // "Você está ciente de que o animal é um ser irracional que durante o período de adaptação pode agir de formas imprevistas (arranhar móveis, latidos ou miados excessivos, soltura de pelos e fazer necessidades onde não deveria)?",
      opcoes: [
        ["irei educa-lo(a) batendo nele porque é o correto a se fazer", 0.0],
        [
          "irei respirar fundo e  educa-lo(a) redirecionando para outras atividades que acho mais uteis",
          1.0,
        ],
        ["irei procurar ajuda para entender melhor como educa-lo", 1.0],
      ],
      //=================================================================================================================
    },
    {
      //=================================================================================================================
      pergunta:
        "Caso alguem proximo em sua residencia venha a ter uma alergia ao animal adotado ",
      opcoes: [
        ["irei abandona-lo", 0.0],
        [
          "irei ver a melhor possibilidade para o bem do animal devolvendo para ong/abrigo",
          0.5,
        ],
        [
          "Verifiquei e não tem nenhuma pessoa em minha residencia que tenha alergia ao animal que quero adotar ",
          1.0,
        ],
      ],
      //=================================================================================================================
    },
    {
      //=================================================================================================================
      pergunta: "Caso o animal adotado cresça mais que o previsto",
      opcoes: [
        [
          "não concordo e irei devolve-lo pois não quero um animal grande em casa",
          0.0,
        ],
        [
          "entendo que existe essa possibilidade do animal crescer mais que o previsto e irei sempre ama-lo",
          1.0,
        ],
      ],
      //=================================================================================================================
    },
    {
      pergunta: "Em sua residencia voce pode:",
      opcoes: [
        ["não posso oferece segurança para o animal", 0.0],
        ["posso oferece segurança para o animal", 1.0],
      ],
      //=================================================================================================================
    },
    {
      pergunta: "Oque voce acha sobre castração de animais:",
      opcoes: [
        [
          "Muito importante pois ajuda a diminuir a possibilidade de filhotinhos inesperados e ajuda a previnir futuras doenças",
          1.0,
        ],
        [
          "Não é util pois posso dar 'anti-cio/anticoncepcional' para meu cachorro(a)/gato(a) ",
          0.0,
        ],
        ["Não é util so é perda de tempo", 0.0],
      ],
      //=================================================================================================================
    },
    {
      pergunta: "Em caso de viagens, o animal fica sozinho em sua residencia ?",
      opcoes: [
        ["sim", 0.0],
        ["nao", 1.0],
      ],
      //=================================================================================================================
    },
    {
      pergunta: "Você tem certeza da adoção?",
      opcoes: [
        ["sim", 1.0],
        ["nao", 0.0],
      ],
      //=================================================================================================================
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
            var cont = 0.0;
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

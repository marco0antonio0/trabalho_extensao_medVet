import { useEffect, useState } from "react";
import style from "./style.module.css";
import { useRouter } from "next/router";
import { config_api } from "@/model/get_api";
import localFont from "next/font/local";

//=========================================== //

// Fonte LilitaOne
const myFont_LilitaOne = localFont({
  src: "./../../fonts/LilitaOne-Regular.ttf",
  subsets: ["latin"],
});

// Fonte LakkiReddy
const myFont_LakkiReddy = localFont({
  src: "./../../fonts/LakkiReddy-Regular.ttf",
  subsets: ["latin"],
});

//=========================================== //

// Card inicial da tela principal
export default function Widget_Lista_animais() {
  const [data, setdata] = useState([]);
  const [load, setload] = useState(false);
  const [count, setcount] = useState(2);
  const r = useRouter();

  useEffect(() => {
    if (!load) {
      config_api.get("/api/consulta-dados").then((e) => {
        try {
          setdata(e.data);
          setload(true);
        } catch (error) {}
      });
    }
  });
  return (
    <>
      <div className={style.container_menu}>
        <h1
          style={{
            fontFamily: `${myFont_LakkiReddy.style.fontFamily}, cursive`,
          }}
        >
          Todos nossos pets
        </h1>
      </div>
      <div className={style.container_0}>
        {data.length ? (
          data.map((e, i) => {
            if (i <= count) {
              {
                return (
                  <CardAnimal nome={e.nome} img={e.URL_IMG} id={e.id} key={i} />
                );
              }
            }
          })
        ) : (
          <div className={style.container_cloader}>
            <div className={style.cloader}></div>
          </div>
        )}
      </div>
      <div className={style.line_buttom}>
        {data.length ? (
          <div
            className={`${style.btn_plus} ${
              count < data.length ? null : style.disableBTN
            }`}
            onClick={() => {
              count < data.length
                ? setcount((e) => {
                    return e + 3;
                  })
                : null;
            }}
          >
            <h3
              style={{
                fontFamily: `${myFont_LilitaOne.style.fontFamily}, cursive`,
              }}
            >
              mostra mais
            </h3>
          </div>
        ) : null}
      </div>
    </>
  );
}

// =========================================================== //
// Perfis de animais: breve descrição pag. inicial
function CardAnimal({ nome = "nome", desc = "", img = "", id }) {
  const r = useRouter();
  return (
    <>
      <div
        className={style.card_animal}
        key={id}
        onClick={() => {
          r.push("/pet?id=" + id);
        }}
      >
        {/* ============================== */}
        {/* images */}
        <div className={style.container_image}>
          <img src={img} alt="" />
        </div>
        <h2>{nome}</h2>
        <p>{desc}</p>
      </div>
    </>
  );
}

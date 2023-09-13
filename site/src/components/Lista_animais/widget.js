import { useEffect, useState } from "react";
import style from "./style.module.css";
import { useRouter } from "next/router";
export default function Widget_Lista_animais() {
  const [data, setdata] = useState([]);
  const [load, setload] = useState(false);
  const [count, setcount] = useState(5);
  const r = useRouter();
  const map_animais = [
    { nome: "dudu", desc: "pequena desc: Lorem ipsum dolor sit amet" },
    { nome: "jois", desc: "pequena desc: Lorem ipsum dolor sit amet" },
    { nome: "nova", desc: "pequena desc: Lorem ipsum dolor sit amet" },
    { nome: "gi", desc: "pequena desc: Lorem ipsum dolor sit amet" },
    { nome: "faisca", desc: "pequena desc: Lorem ipsum dolor sit amet" },
    { nome: "edu", desc: "pequena desc: Lorem ipsum dolor sit amet" },
    { nome: "nani", desc: "pequena desc: Lorem ipsum dolor sit amet" },
  ];
  useEffect(() => {
    if (!load) {
      fetch("https://api-request.nova-work.cloud/api/consulta-dados")
        .then((e) => e.json())
        .then((e) => {
          // console.log(e);
          setdata(e.data);
          setload(true);
        });
    }
  });
  return (
    <>
      <div className={style.container_menu}>
        <h1>Todos nossos pets</h1>
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
            className={style.btn_plus}
            onClick={() => {
              count <= data.length
                ? setcount((e) => {
                    return e + 3;
                  })
                : null;
            }}
          >
            <h3>mostra mais</h3>
          </div>
        ) : null}
      </div>
    </>
  );
}

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

import { useEffect, useState } from "react";
import style from "./style.module.css";
export default function Widget_Lista_animais() {
  const [data, setdata] = useState([]);
  const [load, setload] = useState(false);
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
          console.log(e);
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
        {data.map((e, i) => {
          if (i <= 8) {
            {
              return <CardAnimal nome={e.nome} id={i} key={i} />;
            }
          }
        })}
      </div>
      <div className={style.line_buttom}>
        <div className={style.btn_plus} onClick={() => {}}>
          <h3>mostra mais</h3>
        </div>
      </div>
    </>
  );
}

function CardAnimal({
  nome = "nome",
  desc = "pequena desc: Lorem ipsum dolor sit amet",
  id,
}) {
  return (
    <>
      <div className={style.card_animal} key={id}>
        {/* ============================== */}
        {/* images */}
        <div className={style.container_image}>
          <img src="/images/short_image_animal.png" alt="" />
        </div>
        <h2>{nome}</h2>
        <p>{desc}</p>
      </div>
    </>
  );
}

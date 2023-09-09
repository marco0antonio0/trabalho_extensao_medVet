import { useEffect, useState } from "react";
import style from "./style.module.css";
export default function Widget_Lista_animais() {
  const [data, setdata] = useState([]);
  const [count, setcount] = useState(5);
  const [load, setload] = useState(false);

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
        {data.length ? (
          data.map((e, i) => {
            if (i <= count) {
              {
                return (
                  <CardAnimal nome={e.nome} id={i} key={i} img={e.URL_IMG} />
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
              data.length >= count ? null : style.disableBTN
            }`}
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

function CardAnimal({
  nome = "nome",
  desc = "pequena desc: Lorem ipsum dolor sit amet",
  id,
  img = "/images/short_image_animal.png",
}) {
  return (
    <>
      <div className={style.card_animal} key={id}>
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

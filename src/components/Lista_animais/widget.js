import style from "./style.module.css";
export default function Widget_Lista_animais() {
  const map_animais = [
    { nome: "dudu", desc: "pequena desc: Lorem ipsum dolor sit amet" },
    { nome: "jois", desc: "pequena desc: Lorem ipsum dolor sit amet" },
    { nome: "nova", desc: "pequena desc: Lorem ipsum dolor sit amet" },
    { nome: "gi", desc: "pequena desc: Lorem ipsum dolor sit amet" },
    { nome: "faisca", desc: "pequena desc: Lorem ipsum dolor sit amet" },
    { nome: "edu", desc: "pequena desc: Lorem ipsum dolor sit amet" },
    { nome: "nani", desc: "pequena desc: Lorem ipsum dolor sit amet" },
  ];
  return (
    <>
      <div className={style.container_menu}>
        <h1>Todos nossos pets</h1>
      </div>
      <div className={style.container_0}>
        {map_animais.map((e, i) => {
          return <CardAnimal nome={e.nome} desc={e.desc} id={i} />;
        })}
      </div>
      <div className={style.line_buttom}>
        <div className={style.btn_plus}>
          <h3>mostra mais</h3>
        </div>
      </div>
    </>
  );
}

function CardAnimal({
  nome = "nome",
  desc = "pequena desc: Lorem ipsum dolor sit amet",
  id = 0,
}) {
  return (
    <>
      <div className={style.card_animal}>
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

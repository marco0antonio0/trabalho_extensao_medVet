import style from "./style.module.css";

export default function Widget_load_screen() {
  return (
    <>
      <div className={style.container_0}>
        <div className={style.container_cloader}>
          <div className={style.cloader}></div>
        </div>
        <h2>
          carregando <br />
          caso demore muito verifique se o link esta correto
        </h2>
      </div>
    </>
  );
}

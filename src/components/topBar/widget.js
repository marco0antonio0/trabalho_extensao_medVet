import { useState } from "react";
import style from "./style.module.css";

export default function Widget_topBar() {
  const [menu, setmenu] = useState(true);
  // const [click_status, setclick_status] = useState(false);
  return (
    <>
      <div className={style.topBar}>
        <div
          className={`${style.menu_laytou_menor} ${
            menu ? style.animacaoLogo_1 : style.animacaoLogo_2
          }`}
          onClick={() => {
            setmenu(menu ? false : true);
          }}
        >
          <img src="/images/btn_menu.svg" alt="" />
        </div>
        <div className={style.image_logo}>
          <img src="/images/logo.png" alt="" />
        </div>
        <h1>ME ADOTE</h1>
        <div className={style.rows_btns}>
          <h2>QUEM SOMOS?</h2>
          <h2>QUERO AJUDAR</h2>
          <h2>QUERO ADOTAR</h2>
        </div>
      </div>
      {menu ? (
        <div className={style.menu}>
          <h2>QUEM SOMOS?</h2>
          <h2>QUERO AJUDAR</h2>
          <h2>QUERO ADOTAR</h2>
        </div>
      ) : null}
    </>
  );
}

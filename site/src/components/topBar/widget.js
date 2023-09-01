import { useState } from "react";
import style from "./style.module.css";

export default function Widget_topBar() {
  const [menu, setmenu] = useState(false);

  return (
    <>
      {/* ======================================================= */}
      <div className={style.topBar}>
        {/*============================================= */}
        {/* menu reduzido */}
        {/* se trata de uma imagem com ação de clique */}
        {/* apos clicar muda o estado true:false */}
        <div
          className={`${style.menu_laytou_menor} `}
          onClick={() => {
            setmenu(menu ? false : true);
          }}
        >
          <img src="/images/btn_menu.svg" alt="" />
        </div>
        {/*============================================= */}
        {/* div logo que limita o tamanho da imagem da logo referida */}
        <div className={style.image_logo}>
          <img src="/images/logo.png" alt="" />
        </div>
        {/*============================================= */}
        {/* logo do tipo text */}
        {/* elemento h1 */}
        <h1>ME ADOTE</h1>
        {/*============================================= */}
        {/* div que armazena e limita o tamanho da largura para os elementos h2 da lista */}
        <div className={style.rows_btns}>
          <h2>QUEM SOMOS?</h2>
          <h2>QUERO AJUDAR</h2>
          <h2>QUERO ADOTAR</h2>
        </div>
      </div>
      {/*============================================= */}
      {/* ======================================================= */}
      {/* menu popup reduzido */}
      {menu ? (
        <div className={style.menu}>
          <h2>QUEM SOMOS?</h2>
          <h2>QUERO AJUDAR</h2>
          <h2>QUERO ADOTAR</h2>
        </div>
      ) : null}
      {/* ======================================================= */}
    </>
  );
}

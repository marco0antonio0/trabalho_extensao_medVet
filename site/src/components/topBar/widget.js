import { useState } from "react";
import style from "./style.module.css";
import { useRouter } from "next/router";
import localFont from "next/font/local";
import GifPlayer from "./buttomAnimed/widget";

// LondrinaSolid
const myFont_LondrinaSolid = localFont({
  src: "./../../fonts/LondrinaSolid-Regular.ttf",
  subsets: ["latin"],
});

//================== MENU DO SITE =========================

export default function Widget_topBar() {
  const [menu, setmenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const r = useRouter();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {/* ======================================================= */}
      <div className={style.topBar}>
        {/*============================================= */}
        {/* menu reduzido */}
        {/* se trata de uma imagem com ação de clique */}
        {/* apos clicar muda o estado true:false */}

        <button
          className={`${style.menu_laytou_menor} `}
          onClick={() => {
            setmenu(menu ? false : true);
          }}
        >
          <GifPlayer isOpen={!menu ? false : true} />
        </button>
        {/*============================================= */}
        {/* div logo que limita o tamanho da imagem da logo referida */}
        <div className={style.image_logo}>
          <img src="/images/logo.svg" alt="" />
        </div>
        {/*============================================= */}
        {/* logo do tipo text */}
        {/* elemento h1 */}
        <h1
          style={{
            fontFamily: `${myFont_LondrinaSolid.style.fontFamily}, cursive`,
          }}
        >
          ME ADOTE
        </h1>
        {/*============================================= */}
        {/* div que armazena e limita o tamanho da largura para os elementos h2 da lista */}
        <div className={style.rows_btns}>
          <h2
            style={{
              fontFamily: `${myFont_LondrinaSolid.style.fontFamily}, cursive`,
            }}
            onClick={() => {
              setmenu(menu ? false : true);
              r.push("/");
            }}
          >
            INICIO
          </h2>
          <h2
            style={{
              fontFamily: `${myFont_LondrinaSolid.style.fontFamily}, cursive`,
            }}
            onClick={() => {
              setmenu(menu ? false : true);
              r.push("/blog/sobre-nos");
            }}
          >
            QUEM SOMOS?
          </h2>
          <h2
            style={{
              fontFamily: `${myFont_LondrinaSolid.style.fontFamily}, cursive`,
            }}
            onClick={() => {
              setmenu(menu ? false : true);
              r.push("/blog/apoie-o-projeto");
            }}
          >
            QUERO AJUDAR
          </h2>
        </div>
      </div>
      {/*============================================= */}
      {/* ======================================================= */}
      {/* menu popup reduzido */}
      {menu ? (
        <div className={style.menu}>
          <h2
            style={{
              fontFamily: `${myFont_LondrinaSolid.style.fontFamily}, cursive`,
            }}
            onClick={() => {
              r.push("/");
              setmenu(menu ? false : true);
            }}
          >
            INICIO
          </h2>
          <h2
            style={{
              fontFamily: `${myFont_LondrinaSolid.style.fontFamily}, cursive`,
            }}
            onClick={() => {
              setmenu(menu ? false : true);
              r.push("/blog/sobre-nos");
            }}
          >
            QUEM SOMOS?
          </h2>
          <h2
            style={{
              fontFamily: `${myFont_LondrinaSolid.style.fontFamily}, cursive`,
            }}
            onClick={() => {
              setmenu(menu ? false : true);
              r.push("/blog/apoie-o-projeto");
            }}
          >
            QUERO AJUDAR
          </h2>
        </div>
      ) : null}
      {/* ======================================================= */}
    </>
  );
}

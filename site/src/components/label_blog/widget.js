import style from "./style.module.css";
import localFont from "next/font/local";
//===========================================
// LilitaOne
const myFont_LilitaOne = localFont({
  src: "./../../fonts/LilitaOne-Regular.ttf",
  subsets: ["latin"],
});
export default function Widget_Label_blog({
  titulo = "PASSEAR FAZ BEM PARA SEU PET",
  desc = "POSTADO POR ME ADOTE, EM AGO 31, 2023",
  img = "/images/icon_casinha_pets.png",
}) {
  return (
    <>
      <div className={style.container_0}>
        <div className={style.container_0_0}>
          {/*================================================== */}
          {/*  div image */}
          <div className={style.image_container}>
            <img src={img} alt="" />
          </div>
          {/*================================================== */}
          {/* div coluna de textos h1 e h3 */}
          <div className={style.colunmText}>
            <h1
              style={{
                fontFamily: `${myFont_LilitaOne.style.fontFamily}, cursive`,
              }}
            >
              {titulo}
            </h1>
            <h3
              style={{
                fontFamily: `${myFont_LilitaOne.style.fontFamily}, cursive`,
              }}
            >
              {desc}{" "}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

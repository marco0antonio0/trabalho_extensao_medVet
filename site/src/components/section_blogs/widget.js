import { useRouter } from "next/router";
import style from "./style.module.css";
import localFont from "next/font/local";
//===========================================
// LilitaOne
const myFont_LilitaOne = localFont({
  src: "./../../fonts/LilitaOne-Regular.ttf",
  subsets: ["latin"],
});
// LakkiReddy
const myFont_LakkiReddy = localFont({
  src: "./../../fonts/LakkiReddy-Regular.ttf",
  subsets: ["latin"],
});
// LondrinaSolid
const myFont_LondrinaSolid = localFont({
  src: "./../../fonts/LondrinaSolid-Regular.ttf",
  subsets: ["latin"],
});
//===========================================
// style={{
//             fontFamily: `${myFont_LakkiReddy.style.fontFamily}, cursive`,
//           }}
export default function Widget_Blogs_section() {
  const r = useRouter();

  return (
    <>
      <div className={style.container_0}>
        <h1
          style={{
            fontFamily: `${myFont_LilitaOne.style.fontFamily}, cursive`,
          }}
        >
          BLOG EDUCACIONAL
        </h1>
        <div className={style.container_cards}>
          <div
            className={style.item_card}
            onClick={() => {
              r.push("/blog/boas-praticas");
            }}
          >
            <ItemCards
              url_image="/images/imageBlog_1.png"
              titulo="PASSEAR TAMBEM É BOM PRA ELES"
            />
          </div>
          <div
            className={style.item_card}
            onClick={() => {
              r.push("/blog/otimos-cuidados");
            }}
          >
            <ItemCards
              url_image="/images/imageBlog_2.png"
              titulo="CUIDE DO SEU PELUDINHO"
            />
          </div>
          <div
            className={`${style.item_card} ${style.status_item}`}
            onClick={() => {
              r.push("/blog/amor-aos-animais");
            }}
          >
            <ItemCards
              url_image="/images/imageBlog_3.png"
              titulo="DÊ AMOR E CARINHO"
            />
          </div>
        </div>
        <div
          className={style.container_ItemCards}
          onClick={() => {
            r.push("/blog/amor-aos-animais");
          }}
        >
          <div>
            <img src="/images/imageBlog_3.png" alt="" />
          </div>
          <h2
            style={{
              fontFamily: `${myFont_LilitaOne.style.fontFamily}, cursive`,
            }}
          >
            DÊ AMOR E CARINHO
          </h2>
        </div>
      </div>
    </>
  );
}

function ItemCards({ titulo, url_image }) {
  return (
    <>
      {/*====================================== */}
      <div className={style.imagesCards}>
        <img src={url_image} alt="" />
      </div>
      {/*====================================== */}
      <h2
        style={{
          fontFamily: `${myFont_LilitaOne.style.fontFamily}, cursive`,
        }}
      >
        {titulo}
      </h2>
    </>
  );
}

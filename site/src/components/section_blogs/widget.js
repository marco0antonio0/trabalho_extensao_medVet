import style from "./style.module.css";

export default function Widget_Blogs_section() {
  return (
    <>
      <div className={style.container_0}>
        <h1>BLOG EDUCACIONAL</h1>
        <div className={style.container_cards}>
          <div className={style.item_card}>
            <ItemCards
              url_image="/images/imageBlog_1.png"
              titulo="PASSEAR TAMBEM É BOM PRA ELES"
            />
          </div>
          <div className={style.item_card}>
            <ItemCards
              url_image="/images/imageBlog_2.png"
              titulo="CUIDE DO SEU PELUDINHO"
            />
          </div>
          <div className={`${style.item_card} ${style.status_item}`}>
            <ItemCards
              url_image="/images/imageBlog_3.png"
              titulo="DÊ AMOR E CARINHO"
            />
          </div>
        </div>
        <div className={style.container_ItemCards}>
          <div>
            <img src="/images/imageBlog_3.png" alt="" />
          </div>
          <h2>DÊ AMOR E CARINHO</h2>
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
      <h2>{titulo}</h2>
    </>
  );
}

import style from "./style.module.css";

export default function Widget_Banner({
  url_image = "/images/bannercachorro.png",
}) {
  return (
    <>
      <div className={style.container_0}>
        <img src={url_image} alt="" className={style.img_alter_1} />
      </div>
    </>
  );
}

// Rodapé

import style from "./style.module.css";

export default function Widget_BottomBar() {
  return (
    <>
      <div className={style.container_0}>
        <div className={style.det_img}>
          <img src="/images/bottonBar.png" alt="" />
        </div>
        <div className={style.container_1}>
          <div className={style.icon_short}>
            <img src="/images/icon_instagram.png" alt="" />
          </div>
          <div className={style.icon_short}>
            <img src="/images/icon_twiter.png" alt="" />
          </div>
          <div className={style.icon_short_1}>
            <img src="/images/logo_iconnn.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

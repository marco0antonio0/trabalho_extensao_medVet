// ======== Sessão de texto ========= //

import Markdown from "react-markdown";
import style from "./style.module.css";
export default function Widegt_Post_text({ texto = "", titulo = "" }) {
  return (
    <>
      <div className={style.container_0}>
        <div className={style.container_divider_title}>
          <img src="/images/icon_patinha.png" alt="" />
          <h1>{titulo}</h1>
        </div>
        <Markdown>{texto}</Markdown>
      </div>
    </>
  );
}

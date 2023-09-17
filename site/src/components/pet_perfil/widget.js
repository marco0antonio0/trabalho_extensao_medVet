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
export default function Widget_perfil({ data }) {
  const text_cachorro = `Oi, pessoal! Eu sou o(a) ${data.nome}, um garoto(a) da raça ${data.raca}. Tenho ${data.idade} anos de pura animação e lealdade para oferecer a todos que cruzam o meu caminho. Minha pelagem é ${data.pelugem}, eu adoro quando as pessoas acariciam meu pelo macio. Estou sempre pronto para brincar, correr e, é claro, dar muitos lambidelas de carinho. Vamos nos divertir juntos!`;
  const text_gato = `Olá, pessoal! Sou a(o) ${data.nome}, uma gatinha(o) fofa(o) e travesso(a). Como todos os gatos, sou uma ${data.genero}, e tenho ${data.idade} anos, embora minha curiosidade pareça que tenho a idade de um filhote para sempre. Minha pelagem é ${data.pelugem} e sedosa e da cor. Adoro explorar cada canto da casa, me aconchegar em lugares aconchegantes e brincar com bolinhas de lã. Não resisto a um carinho na barriga e a uma boa soneca ao sol. Miau! 🐾`;
  return (
    <>
      <div className={style.container_0}>
        <div className={style.container_image}>
          <img src={data.URL_IMG} alt="" />
        </div>
        <div className={style.detalhe}>
          <h1
            style={{
              fontFamily: `${myFont_LondrinaSolid.style.fontFamily}, cursive`,
            }}
          >
            {data.nome}
          </h1>
          <p>{data.tipo == "cachorro" ? text_cachorro : text_gato}</p>
        </div>
      </div>
    </>
  );
}

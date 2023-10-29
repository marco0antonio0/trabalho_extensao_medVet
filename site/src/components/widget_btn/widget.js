import { useRouter } from "next/router";
import style from "./style.module.css";
import localFont from "next/font/local";

// Classe Fonte 'LilitaOne-regular'

const myFont_LilitaOne = localFont({
  src: "./../../fonts/LilitaOne-Regular.ttf",
  subsets: ["latin"],
});

// ==================================================== //

export default function Widget_btn_person({
  numero,
  codigo,
  nome_solicitante,
}) {
  const r = useRouter();
  return (
    <>
      <div
        className={style.btn_plus}
        onClick={() => {
          r.push(
            `https://wa.me/55${numero}?text=Ola%20me%20chamo%20${nome_solicitante}%20e%20quero%20fazer%20a%20ado%C3%A7%C3%A3o%20do%20pet%20codigo%20${codigo}%20eu%20vim%20pelo%20site%20me%20adote%20belem`
          );
        }}
      >
        <h3
          style={{
            fontFamily: `${myFont_LilitaOne.style.fontFamily}, cursive`,
          }}
        >
          solicitar o pedido no whatsapp !!
        </h3>
      </div>
    </>
  );
}

// ==================================================================== //

export function Widget_btn_person1() {
  const r = useRouter();
  return (
    <>
      <div
        className={style.btn_plus}
        onClick={() => {
          r.push(`/blog/boas-praticas`);
        }}
      >
        <h3
          style={{
            fontFamily: `${myFont_LilitaOne.style.fontFamily}, cursive`,
          }}
        >
          vou ler e tentar novamente !!
        </h3>
      </div>
    </>
  );
}

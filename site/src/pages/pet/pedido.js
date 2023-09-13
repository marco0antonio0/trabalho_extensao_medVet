import Head from "next/head";
import Widget_topBar from "@/components/topBar/widget";
import Widget_BottomBar from "@/components/bottomBar/widget";
import Widget_Label_blog from "@/components/label_blog/widget";
import Widegt_Post_text from "@/components/post_text/widget";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Widget_load_screen from "@/components/load/widget";
import Widget_btn_person from "@/components/widget_btn/widget";

export default function Home() {
  const [data, setdata] = useState([]);
  const [load, setload] = useState(false);
  const [load2, setload2] = useState(false);
  const [data11, setdata11] = useState([]);
  const [load11, setload11] = useState(false);
  const r = useRouter();
  const { d, dd, ddd, dddd } = r.query;
  useEffect(() => {
    if (!load && d) {
      fetch(
        "https://api-request.nova-work.cloud/api/one-consulta-dados?id=" + d
      )
        .then((e) => e.json())
        .then((e) => {
          try {
            let d = e.data[0];
            if (d.tipo == "c") {
              d.tipo = "cachorro";
            } else {
              d.tipo = "gato";
            }
            if (d.genero == "M") {
              d.genero = "macho";
            } else {
              d.genero = "femea";
            }
            // console.log(d);
            setdata(d);
            if (d.nome.length > 0) {
              setload2(true);
            }

            setload(true);
          } catch (error) {}
        });
    }
    if (!load11 && dd) {
      fetch(
        "https://api-request.nova-work.cloud/api/one-consulta-dados-ong?id=" +
          dd
      )
        .then((e) => e.json())
        .then((e) => {
          try {
            let d = e.data[0];

            // console.log(d);
            setdata11(d);
            if (d.nome.length > 0) {
              setload2(true);
            }

            setload11(true);
          } catch (error) {}
        });
    }
  });
  return (
    <>
      <Head>
        <title>Adote seu pet em Belém e Ananindeua | Pets Incríveis</title>
        <meta
          name="description"
          content="Adote seu pet em Belém e Ananindeua. Encontre pets incríveis cheios de amor e carinho para fazer parte da sua família."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="colunm">
        <Widget_topBar />
        {load11 && load2 ? (
          <div className="sessao_1">
            <Widget_Label_blog
              titulo="Parabens voce passou no quizz"
              img="/images/icon-festa.png"
              desc=""
            />
            {/* <Widget_Banner url_image="/images/bannerImage_passeando_com_pets.png" /> */}
            <Widegt_Post_text
              titulo={`Entre em contato com a ong ${data11.nome}`}
              texto={`Ola ${ddd} parabens por ter passado no nosso quizz entre em contato com a ong responsavel pelo pet clicando no botão abaixo contato via whatsapp e informe o codigo ${data.id}-${data11.id}-${dddd} para completar sua adoção `}
            />
            {/*================================================= */}
            <Widget_btn_person
              numero={data11.telefone}
              codigo={`${data.id}-${data11.id}-${dddd} `}
              nome_solicitante={ddd}
            />
            {/*================================================= */}
          </div>
        ) : (
          <div className="sessao_1">
            <Widget_load_screen />
          </div>
        )}
        <Widget_BottomBar />
      </div>
    </>
  );
}

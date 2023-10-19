import Head from "next/head";
import Widget_topBar from "@/components/topBar/widget";
import Widget_BottomBar from "@/components/bottomBar/widget";
import Widget_Label_blog from "@/components/label_blog/widget";
import Widegt_Post_text from "@/components/post_text/widget";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Widget_load_screen from "@/components/load/widget";
import Widget_btn_person from "@/components/widget_btn/widget";
import { config_api } from "@/model/get_api";

export default function Home() {
  const [data, setdata] = useState([]);
  const [load, setload] = useState(false);
  const [load2, setload2] = useState(false);
  const [data11, setdata11] = useState([]);
  const [load11, setload11] = useState(false);
  const r = useRouter();
  const { d, dd, ddd, dddd, dx } = r.query;
  useEffect(() => {
    if (!load && d) {
      //=============================================================================
      config_api.get("/api/one-consulta-dados?id=" + d).then((e) => {
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
          setdata(d);
          if (d.nome.length > 0) {
            setload2(true);
          }

          setload(true);
        } catch (error) {}
      });
      //=============================================================================
    }
    if (!load11 && dd) {
      //=============================================================================
      config_api.get("/api/one-consulta-dados-ong?id=" + dd).then((e) => {
        try {
          let d = e.data[0];
          setdata11(d);
          if (d.nome.length > 0) {
            setload2(true);
          }
          setload11(true);
        } catch (error) {}
      });
      //=============================================================================
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
      <div className="colunm1">
        <Widget_topBar />
        <div className="colunm">
          {/* componente topBar */}
          {load11 && load2 ? (
            <div className="sessao_1">
              {/*================================================= */}
              {/* componente titulo Blog */}
              <Widget_Label_blog
                titulo={` Parabens voce passou no quizz `}
                img="/images/icon-festa.png"
                desc={`Sua pontuação foi de ${dx} de 10 pontos `}
              />
              {/*================================================= */}
              {/* componente blog */}
              <Widegt_Post_text
                titulo={`Entre em contato com a ong ${data11.nome}`}
                texto={`Ola ${ddd} parabens por ter passado no nosso quizz entre em contato com a ong responsavel pelo pet clicando no botão abaixo contato via whatsapp e informe o codigo ${data.id}-${data11.id}-${dddd} para completar sua adoção `}
              />
              {/*================================================= */}
              {/* componente buttom */}
              <Widget_btn_person
                numero={data11.telefone}
                codigo={`${data.id}-${data11.id}-${dddd} `}
                nome_solicitante={ddd}
              />
              {/*================================================= */}
            </div>
          ) : (
            <div className="sessao_1">
              {/*================================================= */}
              {/* componente de load */}
              <Widget_load_screen />
              {/*================================================= */}
            </div>
          )}
          {/*================================================= */}
          {/* sessão estrutura mais a abaixo */}
          {/*================================================= */}
        </div>
        <Widget_BottomBar />
      </div>
    </>
  );
}

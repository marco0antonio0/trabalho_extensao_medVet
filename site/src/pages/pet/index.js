import { useEffect, useState } from "react";
import Head from "next/head";
import Widget_topBar from "@/components/topBar/widget";
import Widget_BottomBar from "@/components/bottomBar/widget";
import Widget_perfil from "@/components/pet_perfil/widget";
import { useRouter } from "next/router";
import Widget_quizz from "@/components/quizz/widget";
import Widget_load_screen from "@/components/load/widget";
import { config_api } from "@/model/get_api";

export default function Home() {
  const r = useRouter();
  const { id } = r.query;
  const [data, setdata] = useState([]);
  const [load, setload] = useState(false);
  const [load2, setload2] = useState(false);
  useEffect(() => {
    if (!load && id) {
      config_api.get(`/api/one-consulta-dados?id=${id}`).then((e) => {
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
          {load2 > 0 ? (
            <div className="sessao_1">
              {/*================================================ */}
              <Widget_perfil data={data} />
              <Widget_quizz data={data} />
              {/*================================================ */}
            </div>
          ) : (
            <div className="sessao_1">
              {/*================================================ */}
              <Widget_load_screen />
              {/*================================================ */}
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

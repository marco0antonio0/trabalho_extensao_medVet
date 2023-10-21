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
  const [notfound, setnotfound] = useState(false);
  useEffect(() => {
    if (!load && id) {
      // =======================================
      // faz a chamada api
      config_api.get(`/api/one-consulta-dados?id=${id}`).then((e) => {
        try {
          //========================================================
          // caso retorne algum conteudo legivel
          if (e.data.length > 0) {
            //========================================================
            // faz o armazenamento na var d e pega a primeira posição
            let d = e.data[0];
            console.log(e.data.length);
            //========================================================
            // formatação das vars
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
            //========================================================
            // setando parametro data
            setdata(d);
            // validação 1
            if (d.nome.length > 0) {
              setload2(true);
            }
            // validação 2
            setload(true);
          } else {
            //===================================
            // caso não retorne conteudo nenhum
            // direciona o usuario para pagina de erro
            r.push("/404");
          }
        } catch (error) {
          //===================================
          // caso de erro
          // direciona o usuario para pagina de erro
          r.push("/404");
        }
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
              {/* perfil de pets */}
              <Widget_perfil data={data} />
              {/*====================================== */}
              {/* sessão de perguntas  */}
              <Widget_quizz data={data} />
              {/*================================================ */}
            </div>
          ) : (
            <div className="sessao_1">
              {/*================================================ */}
              {/* tela de carregamento */}
              <Widget_load_screen />
              {/*================================================ */}
            </div>
          )}
          {/*================================================= */}
        </div>
        {/* bottombar */}
        <Widget_BottomBar />
      </div>
    </>
  );
}

import Head from "next/head";
import Widget_topBar from "@/components/topBar/widget";
import Widget_Lista_animais from "@/components/Lista_animais/widget";
import Widget_Banner from "@/components/banner/widget";
import Widget_Blogs_section from "@/components/section_blogs/widget";
import Widget_BottomBar from "@/components/bottomBar/widget";

export default function Home() {
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
        {/*=================================== */}
        {/* widget do topbar */}
        <Widget_topBar />
        {/*=================================== */}
        <div className="sessao_1">
          {/*=================================== */}
          {/* lista de animais */}
          <Widget_Lista_animais />
          {/* imagem ilustrativa */}
          <Widget_Banner />
          {/* imagem ilustrativa */}
          <Widget_Blogs_section />
          {/*=================================== */}
        </div>
        {/*=================================== */}
        {/* sessão estrutura mais a abaixo */}
        <Widget_BottomBar />
        {/*=================================== */}
      </div>
    </>
  );
}

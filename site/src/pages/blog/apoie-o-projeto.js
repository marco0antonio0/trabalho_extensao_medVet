import Head from "next/head";
import Widget_topBar from "@/components/topBar/widget";
import Widget_Banner from "@/components/banner/widget";
import Widget_Blogs_section from "@/components/section_blogs/widget";
import Widget_BottomBar from "@/components/bottomBar/widget";
import Widget_Label_blog from "@/components/label_blog/widget";
import Widegt_Post_text from "@/components/post_text/widget";

// ============== Pagina Apoie ====================

export default function Home() {
  return (
    <>
      {/** Header da pagina */}
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
          {/** Div principal */}
          <div className="sessao_1">
            {/* titulo do blog */}
            <Widget_Label_blog
              titulo="Apoie Projeto adote um pet"
              desc="POSTADO POR ME ADOTE, EM SET 13, 2023"
              img="/images/logo.png"
            />
            {/** Imagem ilustrativa */}
            <Widget_Banner url_image="/images/bannerImage_passeando_com_pets.png" />

            {/** Primeiro texto */}
            <Widegt_Post_text
              titulo="Como ajudar?"
              texto={`O projeto "Adote um pet" é uma iniciativa incrível que visa facilitar a adoção responsável de animais de estimação por meio de uma plataforma digital interativa. Se você se identifica com a causa e deseja contribuir para o sucesso deste projeto inovador, existem várias maneiras pelas quais você pode ajudar a fazer a diferença. Vamos explorar algumas delas:`}
            />

            {/** Segundo texto */}
            <Widegt_Post_text
              titulo="Divulgue nas Redes Sociais"
              texto={`Compartilhe informações sobre o projeto em suas redes sociais. Quanto mais pessoas conhecerem a iniciativa, maiores serão as chances de encontrar lares amorosos para os animais que precisam de um lar.
          `}
            />
            {/** Imagem ilustrativa */}
            <Widget_Banner url_image="/images/bannerImage_cats.png" />

            {/** Terceiro texto */}
            <Widegt_Post_text
              titulo="Compartilhe Experiências"
              texto={`Se você já adotou um animal de estimação ou possui experiência em cuidar de animais, compartilhe suas histórias e conhecimento com a comunidade. Isso pode inspirar outros a considerarem a adoção e aprenderem mais sobre os cuidados com os animais.
          `}
            />
            {/** Sesão do blog edicacional */}
            <Widget_Blogs_section />
          </div>

          {/** Footer da pagina */}
        </div>
        <Widget_BottomBar />
      </div>
    </>
  );
}

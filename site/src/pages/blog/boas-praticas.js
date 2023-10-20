import Head from "next/head";
import Widget_topBar from "@/components/topBar/widget";
import Widget_Banner from "@/components/banner/widget";
import Widget_Blogs_section from "@/components/section_blogs/widget";
import Widget_BottomBar from "@/components/bottomBar/widget";
import Widget_Label_blog from "@/components/label_blog/widget";
import Widegt_Post_text from "@/components/post_text/widget";

// ================ Blog "PASSEAR TAMBEM É BOM PRA ELES" =================

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
            <Widget_Label_blog titulo="PASSEAR É MUITO BOM PARA OS ANIMAIS" />
            {/** Imagem ilustrativa */}
            <Widget_Banner url_image="/images/bannerImage_passeando_com_pets.png" />

            {/** Primeiro texto */}
            <Widegt_Post_text
              titulo="Falando sobre os animais"
              texto={`Passeios ao ar livre não são apenas uma atividade agradável para os donos de animais de estimação e seus companheiros peludos, mas também desempenham um papel fundamental na saúde e felicidade dos animais. Neste blog, vamos explorar a importância dos passeios para os animais de estimação e como eles beneficiam nossos amigos de quatro patas.`}
            />

            {/** Segundo texto */}
            <Widegt_Post_text
              titulo="Exercício para o Corpo e a Mente"
              texto={`Os passeios diários proporcionam aos animais de estimação a oportunidade de se exercitar fisicamente e mentalmente, o que é essencial para seu bem-estar. Aqui estão alguns pontos importantes:

- **Atividade física:** Os passeios oferecem uma forma de exercício regular que ajuda a manter os músculos, ossos e articulações de seu animal de estimação saudáveis. Isso é particularmente importante para cães, pois eles precisam de atividade física para gastar energia.

- **Estímulo mental:** Durante os passeios, os animais de estimação são expostos a novos cheiros, sons e ambientes, o que estimula sua mente. Isso é especialmente relevante para cães e gatos, que se beneficiam da exploração e do enriquecimento ambiental.

- **Vínculo entre dono e pet:** Passear com seu animal de estimação fortalece o vínculo entre vocês, criando momentos de qualidade e compartilhando experiências juntos.
`}
            />

            {/** Imagem ilustrativa */}
            <Widget_Banner url_image="/images/bannerImage_cats.png" />

            {/** Terceiro texto */}
            <Widegt_Post_text
              titulo="Redução do Estresse e Comportamento Adequado"
              texto={`Além do exercício, os passeios desempenham um papel fundamental na redução do estresse e no desenvolvimento de comportamentos apropriados em animais de estimação. Aqui estão alguns pontos a serem considerados:
- **Redução de estresse:** Animais de estimação que têm a oportunidade de passear regularmente costumam ser menos estressados e ansiosos. O contato com a natureza e o ar livre proporciona relaxamento e tranquilidade.

- **Socialização:** Passeios oferecem a chance de socializar com outros animais de estimação e pessoas. Isso ajuda a reduzir a agressividade ou o medo em relação a estranhos.

- **Prevenção de comportamentos indesejados:** Animais que passeiam regularmente estão menos propensos a desenvolver comportamentos destrutivos, como roer móveis ou cavar buracos no jardim. O exercício e a estimulação mental os mantêm ocupados e satisfeitos.

`}
            />
            {/** Sessão do blog educacional */}
            <Widget_Blogs_section />
          </div>

          {/** Footer da pagina */}
        </div>
        <Widget_BottomBar />
      </div>
    </>
  );
}

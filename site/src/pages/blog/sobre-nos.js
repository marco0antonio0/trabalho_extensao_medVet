import Head from "next/head";
import Widget_topBar from "@/components/topBar/widget";
import Widget_Banner from "@/components/banner/widget";
import Widget_Blogs_section from "@/components/section_blogs/widget";
import Widget_BottomBar from "@/components/bottomBar/widget";
import Widget_Label_blog from "@/components/label_blog/widget";
import Widegt_Post_text from "@/components/post_text/widget";

// ================== Blog "QUEM SOMOS?" =================//

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
      <Widget_topBar />
      <div className="colunm">
        {/** Div principal */}
        <div className="sessao_1">
          {/* titulo do blog */}
          <Widget_Label_blog
            titulo="Projeto adote um pet"
            desc="POSTADO POR ME ADOTE, EM SET 13, 2023"
            img="/images/logo.png"
          />

          {/** Imagem ilustrativa */}
          <Widget_Banner url_image="/images/bannerImage_passeando_com_pets.png" />

          {/** Primeiro texto */}
          <Widegt_Post_text
            titulo="Sobre o projeto"
            texto={`O projeto consiste em um site dedicado à doação de animais de estimação, proporcionando uma experiência amigável e eficaz para os interessados em adotar. Ao acessar o site, os usuários serão recebidos por uma lista horizontal de fotos de animais disponíveis para adoção. Ao selecionar uma imagem, os usuários serão direcionados a um questionário (quizz) que contém quatro perguntas relevantes relacionadas à responsabilidade e ao cuidado com os animais.`}
          />

          {/** Segundo texto */}
          <Widegt_Post_text
            titulo="Objetivo e Benefícios"
            texto={`O objetivo principal do projeto é criar uma plataforma que facilite a adoção responsável de animais de estimação, garantindo que os adotantes compreendam as responsabilidades e os cuidados envolvidos na criação de um novo membro da família. Além disso, o projeto busca promover a educação sobre o bem-estar animal, oferecendo informações valiosas por meio do blog de aprendizado.
          `}
          />

          {/** Imagem ilustrativa */}
          <Widget_Banner url_image="/images/bannerImage_cats.png" />

          {/** Terceiro texto */}
          <Widegt_Post_text
            titulo="Impacto Acadêmico e Parcerias"
            texto={`A colaboração entre os grupos acadêmicos de Ciência da Computação e Medicina Veterinária é fundamental para o sucesso do projeto. A equipe de Ciência da Computação ficará responsável pelo desenvolvimento da plataforma e da interface do usuário, enquanto a equipe de Medicina Veterinária contribuirá com seu conhecimento especializado para elaborar as perguntas do quizz e fornecer conteúdo educacional relevante e aprimoramento dos demais requisitos e necessidades do projeto junto a equipe de ciencias da computação.
          `}
          />

          {/** Sessão do blog educacional */}
          <Widget_Blogs_section />
        </div>

        {/** Footer da pagina */}
      </div>
      <Widget_BottomBar />
    </>
  );
}

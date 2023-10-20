import Head from "next/head";
import Widget_topBar from "@/components/topBar/widget"; /** */
import Widget_Banner from "@/components/banner/widget";
import Widget_Blogs_section from "@/components/section_blogs/widget";
import Widget_BottomBar from "@/components/bottomBar/widget";
import Widget_Label_blog from "@/components/label_blog/widget";
import Widegt_Post_text from "@/components/post_text/widget";

//Blog Educacional - Titulo: Dê amor e carinho

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
            <Widget_Label_blog titulo="De amor e carinho" />

            {/* iamgem ilustrativa blog */}
            <Widget_Banner url_image="/images/bannerImage_passeando_com_pets.png" />

            {/* Primeiro texto */}
            <Widegt_Post_text
              titulo="O Poder do Amor e Carinho: Cuidando dos Nossos Pets"
              texto={`Os animais de estimação têm um lugar especial em nossos corações. Eles não são apenas companheiros leais, mas também membros da família. Muitos de nós já sabem o quão maravilhoso é compartilhar a vida com um animal de estimação, mas é importante relembrar a importância de dar amor e carinho a eles. Neste blog, exploraremos por que o afeto é essencial para o bem-estar de nossos pets.
`}
            />

            {/* Segundo Texto */}
            <Widegt_Post_text
              titulo="Fortalece o Vínculo com Nossos Pets"
              texto={`Assim como nós, os animais de estimação também anseiam por conexão emocional. Quando passamos tempo acariciando, brincando e conversando com nossos pets, estamos fortalecendo o vínculo entre nós e eles. Essa conexão é o que torna a relação com nossos amigos peludos tão especial.
`}
            />

            {/*Segunda imagem ilustrativa */}
            <Widget_Banner url_image="/images/bannerImage_cats.png" />

            {/* Terceiro texto */}
            <Widegt_Post_text
              titulo="Ajuda a Fortalicer Saúde Mental e Emocional"
              texto={`O amor e o carinho que damos aos nossos pets têm um impacto positivo em sua saúde mental e emocional. Eles se sentem seguros, amados e valorizados, o que ajuda a reduzir o estresse e a ansiedade em suas vidas. Animais de estimação que recebem afeto regularmente são geralmente mais felizes e confiantes.`}
            />
            <Widegt_Post_text
              titulo="Promove o Comportamento Positivo"
              texto={`Quando demonstramos amor e carinho, nossos pets são mais propensos a mostrar comportamentos positivos. Eles são mais obedientes, carinhosos e menos propensos a agir de maneira destrutiva. O afeto é uma ferramenta poderosa para educar e criar um ambiente positivo em casa.`}
            />
            <Widegt_Post_text
              titulo="Formas de Mostrar Afeto"
              texto={`
- **Acariciando e Mimando:** Nada supera o poder de um bom carinho. A maioria dos animais de estimação adora receber carinho e atenção. Passar um tempo acariciando e mimando seu pet é uma maneira simples, mas significativa, de mostrar amor.

- **Tempo de Qualidade:** Reserve um tempo específico para brincar, passear e interagir com seu pet. Isso demonstra que você valoriza sua companhia e está disposto a investir tempo de qualidade com ele.

- **Comunicação e Compreensão:** Embora nossos pets não falem a mesma língua que nós, eles ainda respondem à nossa comunicação. Fale com eles, faça contato visual e tente entender suas necessidades e emoções.
`}
            />

            {/**Sessão do blog educacional   */}
            <Widget_Blogs_section />
          </div>

          {/** Footer da pagina */}
        </div>
        <Widget_BottomBar />
      </div>
    </>
  );
}

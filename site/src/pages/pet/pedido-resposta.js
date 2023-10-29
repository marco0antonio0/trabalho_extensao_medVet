import Head from "next/head";
import Widget_topBar from "@/components/topBar/widget";
import Widget_BottomBar from "@/components/bottomBar/widget";
import Widget_Label_blog from "@/components/label_blog/widget";
import Widegt_Post_text from "@/components/post_text/widget";
import { useRouter } from "next/router";
import { Widget_btn_person1 } from "@/components/widget_btn/widget";
import Widget_Blogs_section from "@/components/section_blogs/widget";

export default function Home() {
  const r = useRouter();
  const { dx } = r.query;
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
          {/* componente topBar */}(
          <div className="sessao_1">
            {/*================================================= */}
            {/* componente titulo Blog */}
            <Widget_Label_blog
              titulo="Poxaaaaaa"
              img="\images\icon-errou.png"
              desc={`Sua pontuação foi de ${dx} de 10 pontos `}
            />
            {/*================================================= */}
            {/* Componente TextoBlog - apresentando a pontuação obtida */}
            <Widegt_Post_text titulo={`Sua pontuação foi de ${dx}/10 pontos`} />
            {/*================================================= */}
            {/* componente titulo Blog */}
            <Widegt_Post_text
              titulo={`Poxaaa as respostas que voce selecionou `}
              texto={`Adotar um animal de estimação é uma decisão importante, e é normal que algumas pessoas não tenham passado no nosso teste recente de adoção de animais. A boa notícia é que elas têm a oportunidade de tentar novamente! Sabemos que cuidar de um animal requer responsabilidade e conhecimento, e é por isso que sugerimos que **leiam** nossos blogs educacionais, como:

- *"Boas Práticas e Bons Cuidados,"*
    -
- *"Cuide do Seu Peludinho"*
    -
- *"Dê Amor e Carinho."*
    -
Esses recursos estão repletos de informações valiosas que vão ajudá-los a aprender mais sobre como proporcionar os cuidados adequados a um animal de estimação e a se preparar para dar a eles todo o amor e atenção que merecem. Além disso, recomendamos que otimizem seus sites pessoais e blogs com estratégias de SEO para que mais pessoas possam encontrar essas informações essenciais na internet.

`}
            />
            {/*================================================= */}
            {/* sessão estrutura mais a abaixo */}
            <Widegt_Post_text
              titulo={`Sempre aprendendo mais`}
              texto="
Acreditamos que o aprendizado contínuo e o cuidado são fundamentais para criar um lar feliz e saudável para um novo amiguinho de quatro patas. Portanto, incentivamos a todos os interessados a aproveitar essa oportunidade para se tornarem os melhores tutores possíveis para seus futuros companheiros peludos. Com o conhecimento e o carinho certos, podem construir uma relação incrível e duradoura com seus animais de estimação, proporcionando-lhes uma vida cheia de amor, alegria e bem-estar.
"
            />
            {/* sessão estrutura mais a abaixo */}
            <Widegt_Post_text titulo={`Leia nosso blog  e tente novamente`} />

            {/*================================================= */}
            {/* sessão estrutura mais a abaixo */}
            {/* <Widget_btn_person1 /> */}
            {/*================================================= */}
            <Widget_Blogs_section />
          </div>
          ){/*================================================= */}
          {/* sessão estrutura mais a abaixo */}
          {/*================================================= */}
        </div>
        <Widget_BottomBar />
      </div>
    </>
  );
}

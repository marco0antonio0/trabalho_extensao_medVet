import Head from "next/head";
import Widget_topBar from "@/components/topBar/widget";
import Widget_Banner from "@/components/banner/widget";
import Widget_Blogs_section from "@/components/section_blogs/widget";
import Widget_BottomBar from "@/components/bottomBar/widget";
import Widget_Label_blog from "@/components/label_blog/widget";
import Widegt_Post_text from "@/components/post_text/widget";

// ================ Blog "Cuide do seu peludinho" =================

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
            <Widget_Label_blog titulo="CUIDE DO SEU PELUDINHO" />
            {/** Imagem ilustrativa */}
            <Widget_Banner url_image="/images/bannerImage_passeando_com_pets.png" />

            {/** Primeiro texto */}
            <Widegt_Post_text
              titulo="Falando sobre os animais"
              texto={`A relação entre humanos e animais de estimação é repleta de amor e alegria. No entanto, cuidar desses amigos peludos pode parecer um desafio, especialmente para aqueles que são novos nesse mundo. Neste guia, vamos explorar algumas dicas simples e acessíveis para que todos possam garantir que seus animais de estimação sejam felizes e saudáveis.`}
            />

            {/** Segundo texto */}
            <Widegt_Post_text
              titulo="Alimentação adequada é importante"
              texto={`Cuidar da nutrição do seu animal de estimação é fundamental para sua saúde e felicidade. Aqui estão algumas dicas simples:

- Ao escolher a comida do seu animal de estimação, leve em consideração fatores como idade, raça e tamanho. Alguns pets têm necessidades dietéticas específicas.

- Evite dar a eles alimentos perigosos, como chocolate, uvas, cebolas e álcool, que podem causar sérios problemas de saúde.

- Mantenha uma dieta equilibrada e siga as orientações do pacote para evitar que seu animal de estimação coma demais ou de menos.
`}
            />

            {/** Imagem ilustrativa */}
            <Widget_Banner url_image="/images/bannerImage_cats.png" />

            {/** Terceiro texto */}
            <Widegt_Post_text
              titulo="Praticar exercicios é otimos para todos"
              texto={`
Assim como nós, animais de estimação precisam de exercícios regulares e estimulação mental. Aqui estão algumas maneiras de manter seus amigos peludos ativos:

- Passeios diários são importantes para cães, permitindo que eles gastem energia e socializem com outros pets e pessoas.

- Brincadeiras e brinquedos, como bolinhas, cordas e jogos interativos, são ótimas maneiras de manter seu pet estimulado.

- Dedique tempo de qualidade a seu animal de estimação, seja brincando, acariciando ou treinando. Isso fortalecerá o vínculo entre vocês.`}
            />
            {/** Quarto texto */}
            <Widegt_Post_text
              titulo="Cuidados de Saúde Preventiva: Prevenindo Problemas Futuros"
              texto={`Manter a saúde do seu pet em dia é fundamental. Aqui estão algumas medidas preventivas:

- Mantenha as vacinas atualizadas de acordo com as recomendações do veterinário para proteger seu pet contra doenças graves.

- Leve seu animal de estimação ao veterinário pelo menos uma vez por ano para exames de rotina e cuidados preventivos.

- Utilize produtos recomendados para manter pulgas, carrapatos e vermes afastados de seu animal de estimação.
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

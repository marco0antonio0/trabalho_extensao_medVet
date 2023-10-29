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
            <Widget_Label_blog
              titulo="De amor e carinho"
              desc="POSTADO POR NEAVET,EM OUT 28, 2023"
            />

            {/* iamgem ilustrativa blog */}
            <Widget_Banner url_image="/images/bannerImage_passeando_com_pets.png" />

            {/* Primeiro texto */}
            <Widegt_Post_text
              titulo="O Poder do Amor e Carinho: Cuidando dos Nossos Pets"
              texto={`Ao realizar a adoção de um novo animal, é necessário preparações em diversos sentidos, sendo esses financeiros e emocionais, além de ter que lidar com a adaptação de espaço e nova rotina que este irá trazer à sua nova residência. A adoção é um compromisso a longo prazo, tendo em vista que cães e gatos podem viver por quase 20 anos de idade e o novo tutor tem obrigações para com este pelo resto de sua vida (SCHERER, 2021).
Diante disso, nota-se a falta de preparo da maioria dos adotantes para receber um novo animal, o que muitas vezes leva ao abandono e maus tratos causando problemas sociais e ambientais (SCHERER, 2021).
`}
            />

            {/* Segundo Texto */}
            <Widegt_Post_text
              titulo="O que é adoção responsável?"
              texto={` A adoção responsável é um ato de amor que envolve cuidar, respeitar e suprir as necessidades do animal escolhido para levar para o seu lar. O processo de adoção implica diretamente na rotina da família, portanto, deve ser feito unicamente quando o adotante tem a certeza de que está preparado para recepcionar adequadamente o pet, sabendo que este tem custos, demanda atenção e será 100% dependente de seu tutor, necessitando que ele compreenda também seus comportamentos naturais, como mordidas, arranhões, latidos (no caso de cachorros) e etc (MANGILI, 2022).
`}
            />

            {/*Segunda imagem ilustrativa */}
            <Widget_Banner url_image="/images/bannerImage_cats.png" />

            {/* Terceiro texto */}
            <Widegt_Post_text
              titulo="Custos financeiros que o animal pode trazer ao tutor"
              texto={` Ter um cão ou um gato em sua nova rotina pode ser uma experiência extremamente positiva em diversos aspectos, porém também significa que haverá gastos regulares, sendo necessário um adequado planejamento para tal. Dessa forma, é importante levar em consideração fatores como alimentação, idas ao veterinário, banho, tosa, vacinação, vermifugação, brinquedos, petiscos e etc (GOMES, 2013). Os animais vivem muitos anos e é necessário manter o compromisso com sua vida durante todo esse período, por esse motivo, é importante se perguntar “Atualmente, possuo condições financeiras para adotar um animal?”. Uma boa prática para evitar problemas é ter um fundo de emergência, sempre mantendo a responsabilidade financeira e garantindo a saúde física e mental do seu novo companheiro.

AUTORES:
\\
[Núcleo de Estudos
Aplicados à Medicina Veterinária -
NEAVET]()\

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

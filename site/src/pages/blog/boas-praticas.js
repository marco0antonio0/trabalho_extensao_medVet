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
            <Widget_Label_blog
              titulo="BOAS PRATICAS BONS CUIDADOS"
              desc="POSTADO POR NEAVET,EM OUT 28, 2023"
            />

            {/** Imagem ilustrativa */}
            <Widget_Banner url_image="/images/bannerBoasPraticas1.png" />

            {/** Primeiro texto */}
            <Widegt_Post_text
              titulo="Falando sobre os animais"
              texto={`Ao realizar a adoção de um novo animal, é necessário preparações em diversos âmbitos, sendo esses financeiros e emocionais, além de ter que lidar com a adaptação de espaço e nova rotina que este irá trazer à sua nova residência. A adoção é um compromisso a longo prazo, tendo em vista que cães e gatos podem viver por quase 20 anos de idade e o novo tutor tem obrigações para com este pelo resto de sua vida (SCHERER, 2021).
Diante disso, nota-se a falta de preparo da maioria dos adotantes para receber um novo animal, o que muitas vezes leva ao abandono e maus tratos causando problemas sociais e ambientais (SCHERER, 2021).
`}
            />

            {/** Segundo texto */}
            <Widegt_Post_text
              titulo="Criação dentro de casa."
              texto={`Para uma guarda responsável, certas medidas são necessárias para assegurar uma qualidade de vida para o animal. Entre elas, destaca-se a importância de criar um ambiente adequado onde o animal poderá viver de forma segura e confortável, minimizando os riscos de acidentes, transmissão ou aquisição de doenças (SOUZA, 2003). Para isso, é fundamental que a residência do tutor possua grades ou telas para impedir que o animal tenha acesso à rua, visto que através da interação com outros animais pode ocorrer a transmissão de doenças infecciosas graves, incluindo zoonoses que apresentam grande risco para a saúde pública. Além disso, riscos de atropelamentos, brigas ou maus-tratos por parte de terceiros são frequentemente maiores aos animais que transitam em vias públicas (ASPIS, 2006).
`}
            />

            {/** Imagem ilustrativa */}
            <Widget_Banner url_image="/images/bannerBoasPraticas2.png" />

            {/** Terceiro texto */}
            <Widegt_Post_text
              titulo="Período de adaptação do animal ao novo ambiente."
              texto={` A adaptação dos pets ao novo lar é um processo complexo que envolve uma série de desafios físicos e emocionais. O estresse inicial é comum em animais recém-adotados, muitas vezes manifestando-se por meio de comportamentos como ansiedade, agressão ou reclusão (ZAWISTOWSKI et al 1998). Quando um animal de estimação é adotado, ele frequentemente enfrenta situações estressantes devido à mudança de ambiente, rotina e interações sociais, visto isso, é de suma importância que o novo tutor tenha ciência de que é um processo longo. Estudos comportamentais, destacam a importância do uso de técnicas como o reforço positivo, paciência e consistência por parte dos adotantes para estabelecer a confiança e segurança necessárias para o animal se sentir confortável em seu novo lar (GAZZANO et al. 2008). `}
            />
            {/** Quarto texto */}
            <Widegt_Post_text
              titulo="Enriquecimento ambiental."
              texto={`O enriquecimento ambiental é de extrema importância para a saúde e bem-estar do seu animal. De acordo com Trentin (2019), este proporciona ao animal atividades que ocupam o seu dia, tirando-o da rotina e aproximando de seu habitat natural. O principal objetivo de implementar alguns tipos de enriquecimento é estimular o desenvolvimento de habilidades, diminuir o estresse e ansiedade, contribuir para o gasto de energia física e mental, ajudar na interação com outros indivíduos e reforçar a relação animal-tutor. Dessa forma, é necessário estipular um objetivo ou comportamento a ser contemplado e ter em mente que o animal deve ter a opção de querer realizá-lo, portanto as atividades/brinquedos não devem ser algo que o cão deve obrigatoriamente interagir. Por fim, o enriquecimento ambiental tem papel também de estimulá-lo de forma física, sensorial, social, alimentar e/ou cognitivo. (ASSIS, 20—).
              
AUTORES:
\\
[Núcleo de Estudos
Aplicados à Medicina Veterinária -
NEAVET]()\

              
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

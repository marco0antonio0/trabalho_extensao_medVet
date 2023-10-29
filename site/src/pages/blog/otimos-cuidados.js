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
            <Widget_Label_blog
              titulo="CUIDE DO SEU PELUDINHO"
              desc="POSTADO POR NEAVET,EM OUT 28, 2023"
            />

            {/** Imagem ilustrativa */}
            <Widget_Banner url_image="/images/bannerImagecuiddedeseupeludinho2.png" />

            {/** Primeiro texto */}
            <Widegt_Post_text
              titulo="Para ficar esperto nas informações"
              texto={`O desenvolvimento do conteúdo foi baseado em artigos científicos que relatam a importância da adoção responsável e como realizá-la, abordando diversos tópicos sobre o assunto como gastos, importância do médico veterinário e cuidados básicos a se ter com um novo animal. O blog servirá como guia para aqueles que desejam adotar caso o futuro tutor falhe nas perguntas propostas no início do processo de adoção.`}
            />

            {/** Segundo texto */}
            <Widegt_Post_text
              titulo="Importância do médico veterinário."
              texto={`A ida regular ao veterinário é muito importante para garantir o bem-estar do animal, sendo assim o médico veterinário realiza exames, vacinações e verificações que ajudam a prevenir doenças e a detectar problemas de saúde precocemente. Além disso, proporciona orientações sobre cuidados adequados, nutrição e comportamento, contribuindo para uma vida mais saudável para o animal de estimação. Os médicos veterinários instruem os tutores sobre como manejar o animal, seus cuidados básicos e saúde (TATIBANA; DA COSTA-VAL,
2009).
`}
            />

            {/** Imagem ilustrativa */}
            <Widget_Banner url_image="/images/bannerImagecuiddedeseupeludinho1.png" />

            {/** Terceiro texto */}
            <Widegt_Post_text
              titulo="Importância da Vacinação"
              texto={`Ter um animal de estimação é uma grande responsabilidade e requer cuidados especiais para garantir a saúde deles. A vacinação desempenha um papel fundamental nesse cuidado, pois ajuda a proteger seu pet contra doenças infecciosas (ALEXANDRINO, 2012). Além disso, ela evita a transmissão dessas doenças de um animal para outro, incluindo a possibilidade de contágio para os seres humanos. As vacinas devem ser realizadas anualmente e ser administradas por um veterinário (ALEXANDRINO, 2012).

# Quais Vacinas Meu Pet Precisa?

# Vacinação Para Cães

A primeira vacina e uma das mais importantes é a polivalente, que pode ser a V8 ou a V10, que protegem contra as seguintes doenças:

- Cinomose

- Parvovirose

- Coronavirose

- Hepatite infecciosa Canina

- Adenovírus tipo 2

- Parainfluenza

- Leptospirose

Outras vacinas recomendadas incluem giardia, gripe canina e leishmaniose, dependendo da região onde o pet vive.

# Vacinação para Gatos

Para gatos, há três opções de vacinas: V3, V4 e V5 que protegem contra:
- V3: panleucopenia, calicivirose e rinotraqueíte.

- V4: mesmas da V3 mais clamidiose.

- V5: mesmas da V4 mais FELV.

# Vacina Antirrábica

A vacina antirrábica é obrigatória tanto para cães quanto para gatos e deve ser repetida anualmente.`}
            />

            {/** Quarto texto */}
            <Widegt_Post_text
              titulo="Importância da castração."
              texto={`A castração é um procedimento cirúrgico que remove o útero em fêmeas e retira testículos em machos (OLIVINDO et al., 2021). Sua maior vantagem é a prevenção de que a fêmea entre constantemente no cio, além de prevenir diversos tipos de patologias tanto para o macho quanto para a fêmea (SILVA et al., 2015). A castração é um ato de amor, que evita uma reprodução desordenada dos animais de estimação, diminuindo os níveis de animais abandonados e nas ruas, além de diminuir a disseminação de doenças (CAMPBELL et al., 2020).


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

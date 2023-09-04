import Head from "next/head";
import { Inter } from "next/font/google";
import Widget_topBar from "@/components/topBar/widget";
import Widget_Lista_animais from "@/components/Lista_animais/widget";
import Widget_Banner from "@/components/banner/widget";
import Widget_Blogs_section from "@/components/section_blogs/widget";
import Widget_BottomBar from "@/components/bottomBar/widget";
import Widget_Label_blog from "@/components/label_blog/widget";
import Widegt_Post_text from "@/components/post_text/widget";

const inter = Inter({ subsets: ["latin"] });

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
        <Widget_topBar />
        <div className="sessao_1">
          <Widget_Label_blog titulo="PASSEAR TAMBEM É BOM PRA ELES" />
          <Widget_Banner url_image="/images/bannerImage_passeando_com_pets.png" />
          <Widegt_Post_text
            titulo="Lorem ipsum"
            texto={`dolor, id tristique lectus. In id pulvinar turpis, ut facilisis massa.
          Nunc gravida pulvinar quam nec fermentum. Praesent facilisis mi nec
          neque porttitor, nec viverra quam porta. Cras sit amet feugiat ligula.
          Pellentesque ac aliquet sapien, non fermentum risus. Aenean at finibus
          ex. Etiam sed elit vitae purus congue vulputate. Integer magna tellus,
          tempus vitae quam ac, consectetur mattis velit. Mauris fermentum ante
          vitae congue blandit.`}
          />
          <Widegt_Post_text
            titulo="Lorem ipsum"
            texto={`dolor, id tristique lectus. In id pulvinar turpis, ut facilisis massa.
          Nunc gravida pulvinar quam nec fermentum. Praesent facilisis mi nec
          neque porttitor, nec viverra quam porta. Cras sit amet feugiat ligula.
          Pellentesque ac aliquet sapien, non fermentum risus. Aenean at finibus
          ex. Etiam sed elit vitae purus congue vulputate. Integer magna tellus,
          tempus vitae quam ac, consectetur mattis velit. Mauris fermentum ante
          vitae congue blandit.
          dolor, id tristique lectus. In id pulvinar turpis, ut facilisis massa.
          Nunc gravida pulvinar quam nec fermentum. Praesent facilisis mi nec
          neque porttitor, nec viverra quam porta. Cras sit amet feugiat ligula.
          Pellentesque ac aliquet sapien, non fermentum risus. Aenean at finibus
          ex. Etiam sed elit vitae purus congue vulputate. Integer magna tellus,
          tempus vitae quam ac, consectetur mattis velit. Mauris fermentum ante
          vitae congue blandit.
          vitae congue blandit.
          `}
          />
          <Widget_Banner url_image="/images/bannerImage_cats.png" />
          <Widegt_Post_text
            titulo="Lorem ipsum"
            texto={`dolor, id tristique lectus. In id pulvinar turpis, ut facilisis massa.
          Nunc gravida pulvinar quam nec fermentum. Praesent facilisis mi nec
          neque porttitor, nec viverra quam porta. Cras sit amet feugiat ligula.
          Pellentesque ac aliquet sapien, non fermentum risus. Aenean at finibus
          ex. Etiam sed elit vitae purus congue vulputate. Integer magna tellus,
          tempus vitae quam ac, consectetur mattis velit. Mauris fermentum ante
          vitae congue blandit.
          dolor, id tristique lectus. In id pulvinar turpis, ut facilisis massa.
          Nunc gravida pulvinar quam nec fermentum. Praesent facilisis mi nec
          neque porttitor, nec viverra quam porta. Cras sit amet feugiat ligula.
          Pellentesque ac aliquet sapien, non fermentum risus. Aenean at finibus
          ex. Etiam sed elit vitae purus congue vulputate. Integer magna tellus,
          tempus vitae quam ac, consectetur mattis velit. Mauris fermentum ante
          vitae congue blandit.
          vitae congue blandit.
          `}
          />
          <Widget_Blogs_section />
        </div>
        <Widget_BottomBar />
      </div>
    </>
  );
}

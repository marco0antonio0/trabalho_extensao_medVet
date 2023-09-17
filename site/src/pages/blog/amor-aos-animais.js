import Head from "next/head";
import Widget_topBar from "@/components/topBar/widget";
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
      <Widget_topBar />

      {/** Div principal */}
      <div className="sessao_1">
        {/* titulo do blog */}
        <Widget_Label_blog titulo="De amor e carinho" />

        {/* imagem ilustrativa blog */}
        <Widget_Banner url_image="/images/bannerImage_passeando_com_pets.png" />

        {/* Primeiro texto */}
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

        {/* Segundo Texto */}
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

        {/*Segunda imagem ilustrativa */}
        <Widget_Banner url_image="/images/bannerImage_cats.png" />

        {/* Terceiro texto */}
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

        {/**Sessão do blog educacional   */}
        <Widget_Blogs_section />
      </div>

      {/** Footer da pagina */}
      <Widget_BottomBar />
    </>
  );
}

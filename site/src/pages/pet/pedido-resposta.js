import Head from "next/head";
import Widget_topBar from "@/components/topBar/widget";
import Widget_BottomBar from "@/components/bottomBar/widget";
import Widget_Label_blog from "@/components/label_blog/widget";
import Widegt_Post_text from "@/components/post_text/widget";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Widget_load_screen from "@/components/load/widget";
import Widget_btn_person, {
  Widget_btn_person1,
} from "@/components/widget_btn/widget";

export default function Home() {
  const [data, setdata] = useState([]);
  const [load, setload] = useState(false);
  const [load2, setload2] = useState(false);
  const [data11, setdata11] = useState([]);
  const [load11, setload11] = useState(false);
  const r = useRouter();
  const { d, dd, ddd, dddd } = r.query;

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
        <Widget_topBar />(
        <div className="sessao_1">
          <Widget_Label_blog
            titulo="Poxaaaaaa"
            img="\images\icon-errou.png"
            desc=""
          />
          {/* <Widget_Banner url_image="/images/bannerImage_passeando_com_pets.png" /> */}
          <Widegt_Post_text
            titulo={`Poxaaa as respostas que voce selecionou `}
            texto={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum libero a tincidunt euismod. Aliquam iaculis eros hendrerit tellus ultricies, at commodo ante viverra. Nulla facilisi. Curabitur quis congue augue. Fusce dictum leo eget felis eleifend, a maximus tortor vulputate. Cras elementum nibh ut lacus mollis pretium. Vivamus sit amet elementum massa. Ut eleifend sem vitae gravida semper. Proin elit magna, dapibus non ornare ut, efficitur vitae urna. Nam et hendrerit ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis arcu ligula, eu faucibus dolor convallis ut.`}
          />
          {/*================================================= */}
          <Widegt_Post_text
            titulo={`Leia nosso blog sobre cuidados basicos e tente novamente`}
            texto={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum libero a tincidunt euismod. Aliquam iaculis eros hendrerit tellus ultricies, at commodo ante viverra. Nulla facilisi. Curabitur quis congue augue. Fusce dictum leo eget felis eleifend, a maximus tortor vulputate. Cras elementum nibh ut lacus mollis pretium. Vivamus sit amet elementum massa. Ut eleifend sem vitae gravida semper. Proin elit magna, dapibus non ornare ut, efficitur vitae urna. Nam et hendrerit ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis arcu ligula, eu faucibus dolor convallis ut.`}
          />
          {/*================================================= */}
          <Widget_btn_person1 />
          {/*================================================= */}
        </div>
        )
        <Widget_BottomBar />
      </div>
    </>
  );
}

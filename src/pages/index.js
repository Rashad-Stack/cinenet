import Head from "next/head";
import { Roboto_Slab } from "@next/font/google";
import { Banner, Header, MovieCards } from "@/components";
import { getVideoById, getVideos } from "@/lib/videos";
import { startFetchMyQueries } from "@/lib/db/hasura";

export const getServerSideProps = async () => {
  const Disney = await getVideos("Disney trailer");
  const Productivity = await getVideos("Productivity");
  const Travels = await getVideos("Travels");
  const Popular = await getVideoById();

  return {
    props: { Travels, Productivity, Disney, Popular },
  };
};

const roboto_slab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "auto",
  preload: true,
});

export default function Home(props) {
  const { Disney = [], Productivity = [], Travels = [], Popular = [] } = props;

  startFetchMyQueries();

  return (
    <>
      <Head>
        <title>Cinenet | Your One-Stop Destination for Movie Streaming</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main className={roboto_slab.className}>
        <Banner
          videoId="T6DJcgm3wNY"
          title="Man of Tomorrow"
          videoName="Superman"
          category="Official Series | Session 3"
        />
        <MovieCards title="Disney" size="large" videos={Disney} />
        <MovieCards title="Travels" size="small" videos={Travels} />
        <MovieCards title="Productivity" size="medium" videos={Productivity} />
        <MovieCards title="Popular" size="small" videos={Popular} />
      </main>
    </>
  );
}

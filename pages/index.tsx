import Intro from "components/index/intro";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Nguyễn Quang Lâm</title>
        <meta
          name="description"
          content="A page about Nguyễn Quang Lâm - A fullstack developer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Intro />
      </main>
    </div>
  );
};

export default Home;

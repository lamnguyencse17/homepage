import Intro from "components/index/intro";
import Skill from "components/index/skill";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Nguyễn Quang Lâm</title>
        <meta
          name="description"
          content="A page about Nguyễn Quang Lâm - A fullstack developer"
        />
      </Head>
      <main className="flex flex-col gap-16">
        <div className="border-b-2 border-blue-100">
          <div className="w-fit whitespace-nowrap px-2 mb-19">
            <Link href="#about">
              <a className="text-3xl font-montserrat">About Me</a>
            </Link>
          </div>
          <Intro />
        </div>
        <div className="border-b-2 border-blue-100">
          <Skill />
        </div>
      </main>
    </div>
  );
};

export default Home;

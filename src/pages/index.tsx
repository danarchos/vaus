import type { NextPage } from "next";
import Head from "next/head";
import { Navigation } from "../components/Navigation";

const Home: NextPage = () => {
  return (
    <div className="p-10">
      <Head>
        <title>Vaus</title>
        <meta
          name="description"
          content="Videos and Podcasts, powered by Bitcoin"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-3xl font-bold">Hello world!</h1>
      <Navigation />
    </div>
  );
};

export default Home;

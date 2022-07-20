import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Navigation } from "../components/Navigation";
import { Auth } from "../components/Auth";
import { supabase } from "../config/supabase";
import { useStore } from "../store";

const Home: NextPage = () => {
  const [session, setSession] = useState<null | any>(null);
  const { authStore } = useStore();

  useEffect(() => {
    const session = supabase.auth.session();
    if (session) authStore.setUser(session.user);
  }, []);

  return (
    <div>
      <Head>
        <title>Vaus</title>
        <meta
          name="description"
          content="Videos and Podcasts, powered by Bitcoin"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-3xl font-bold p-10">VAUS</h1>
      {session ? <Navigation /> : <Auth />}
    </div>
  );
};

export default Home;

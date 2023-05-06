import Head from "next/head";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Products from "@/components/products";

const Home = () => {
  return (
    <>
      <Head>
        <title>ks.dev</title>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <main className="w-full sm:max-w-xl pl-4 pr-4 m-auto">
        <Header />
        <Hero />
        <Products />
      </main>
    </>
  );
};

export default Home;

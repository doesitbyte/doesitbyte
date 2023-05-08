import Head from "next/head";
import Header from "@/components/header";
import Hero from "@/components/hero";

const Contact = () => {
    return (
        <>
            <Head>
                <title>ks.dev | Contact</title>
                <link rel="shortcut icon" href="/favicon.png" />
            </Head>
            <main className="w-full sm:max-w-xl pl-4 pr-4 m-auto">
                <Header />
                <Hero />
            </main>
        </>
    );
};

export default Contact;
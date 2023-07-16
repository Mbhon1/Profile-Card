import Head from "next/head";
import { Josefin_Sans } from "@next/font/google";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Card } from "@chakra-ui/react";

export const josefin = Josefin_Sans({
  weight: ["700", "700"],
  subsets: ["latin"],
});

export default function Home() {
  const title = "Mbhoni's Profile Card";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Mbhoni's profile card." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <Navbar />
      <Card
        className={`shadow-xl max-w-[300px] m-auto md:mt-10 md:max-w-xl ${josefin.className} `}
      >
        <Hero />
        <Footer />
      </Card>
    </>
  );
}

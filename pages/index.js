import Head from "next/head";
import { Josefin_Sans } from "@next/font/google";
import Hero from "../components/Hero";
import About from "../components/About";
import Interests from "../components/Interests";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { ButtonGroup, Card, Flex, useDisclosure } from "@chakra-ui/react";

export const josefin = Josefin_Sans({
  weight: ["700", "700"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Mbhoni Card</title>
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

      <Navbar toggleDarkMode={""} darkMode={""} />

      <Card
        className={`shadow-xl max-w-[300px] m-auto text-black tracking-tight leading-6 ${josefin.className} `}
      >
        <Hero
          name="Mbhoni Baloyi"
          title="Junior FrontEnd Dev"
          email="email"
          linkedin="linkedin"
          emailLink="mailto:mbhonibaloyi9@gmail.com"
          linkedinLink="https://www.linkedin.com/in/mbhoni-baloyi-6870ba175"
        />
        <Flex flexDirection="column" justifyItems="center" alignItems="center">
          <ButtonGroup spacing={6}>
            <About desc="I am a web developer with a background in networking. I have always been interested in technology and have a strong foundation in computer systems. Recently, I have been focusing on learning web development and have been enjoying the challenge of building dynamic and interactive websites. I am constantly striving to improve my skills and stay up-to-date with the latest technologies in the field." />
            <Interests desc="In my free time, I enjoy exploring new technologies and staying up-to-date with the latest developments in web development. I also enjoy participating in online coding challenges and working on personal projects to expand my skillset. In addition to my interest in technology, I enjoy video gaming and experiencing different cultures, as well as spending time with my family and friends." />
          </ButtonGroup>
        </Flex>
        <Footer />
      </Card>
    </>
  );
}

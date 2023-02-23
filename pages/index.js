import Head from "next/head";
import { Inter } from "@next/font/google";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Interests from "@/components/Interests";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [darkMode, setDarkmode] = useState({
    isOn: false,
  });

  function handleChange() {
    setDarkmode((prevState) => ({
      ...prevState,
      isOn: !prevState.isOn,
    }));
  }

  return (
    <>
      <Head>
        <title>Profile Card</title>
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

      <Navbar toggleDarkMode={handleChange} darkMode={darkMode.isOn} />

      <main
        className={`shadow-md max-w-[300px] m-auto text-white tracking-tight leading-6 ${
          darkMode.isOn ? "dark" : ""
        } main--title`}
      >
        <Hero
          name="Mbhoni Baloyi"
          title="Junior Network Admin"
          email="email"
          linkedin="LinkedIn"
        />
        <About
          title="About"
          desc="I am a web developer with a background in networking. 
                I have always been interested in technology and have a 
                strong foundation in computer systems. Recently, 
                I have been focusing on learning web development 
                and have been enjoying the challenge of building 
                dynamic and interactive websites. 
                I am constantly striving to improve 
                my skills and stay up-to-date with the 
                latest technologies in the field."
        />
        <Interests
          title="Interests"
          desc="In my free time, I enjoy exploring new technologies and 
                staying up-to-date with the latest developments in 
                web development. 
                I also enjoy participating in online coding challenges and working on personal projects to expand my skillset. 
                In addition to my interest in technology, 
                I enjoy video gaming and experiencing different cultures, 
                as well as spending time with my family and friends."
        />
        <Footer />
      </main>
    </>
  );
}

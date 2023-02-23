import Head from "next/head";
import { Inter } from "@next/font/google";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Interests from "@/components/Interests";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="shadow-md max-w-[300px] m-auto bg-black text-white tracking-tight leading-6">
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
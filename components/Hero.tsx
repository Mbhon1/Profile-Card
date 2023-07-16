import { IoIosMail } from "react-icons/io";
import { GrLinkedin } from "react-icons/gr";
import { Box, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Image } from "@unpic/react";
import About from "./About";
import Interests from "./Interests";
import { HeroDetails } from "./constants";

const heroDetails: HeroDetails = {
  title: {
    role: "Junior FrontEnd Dev",
    name: "Mbhoni Baloyi",
    btn1: "Email",
    btn2: "LinkedIn",
    site: "Website",
  },
  link: {
    img: "https://imagetolink.com/ib/RDzg5zPcyI.jpg",
    linkedIn: "https://www.linkedin.com/in/mbhoni-baloyi-6870ba175",
    email: "mailto:mbhonibaloyi9@gmail.com",
    site: "https://mbhon1-website.vercel.app",
  },
  alt: "Mbhoni wearing a purple shirt and a black tie, smiling for a professional photoshoot.",
};

const Hero = () => {
  {
    /* TODO: change button colors when switching modes*/
  }
  const mailBtn = useColorModeValue("white", "black");

  const emailBtn: JSX.Element = (
    <motion.button
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      className="rounded-md text-white bg-black text-xl flex justify-center font-bold items-center h-[40px] w-[10em]  uppercase p-6 transition duration-500"
    >
      <IoIosMail className="mr-3 text-4xl" />
      {heroDetails.title.btn1}
    </motion.button>
  );

  const linkedInBtn: JSX.Element = (
    <motion.button
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      className="p-6 rounded-md font-bold justify-center bg-[#486CE2] text-white text-xl flex items-center h-[40px] w-[10em] uppercase transition duration-500"
    >
      <GrLinkedin className="mr-3 text-3xl" />
      {heroDetails.title.btn2}
    </motion.button>
  );

  return (
    <section id="hero">
      <div className="md:max-w-2xl tracking-wide">
        <div className="md:flex">
          <div id="hero-img" className="">
            <HeroImg id={"me"} />
          </div>

          <motion.div
            id="hero-container"
            className="flex flex-col items-center content-center justify-center px-4 py-8 md:px-24"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <h3
              id="title-name"
              className="text-[34px] tracking-wide font-extrabold md:text-[48px]"
            >
              {heroDetails.title.name}
            </h3>
            <div className="self-center text-center pb-3">
              <p id="title-role" className="py-4 text-teal-700 md:text-xl">
                {heroDetails.title.role}
              </p>

              <div id="website-container">
                <a href={heroDetails.link.site}>
                  <p id="website-link" className="text-cyan-600 md:text-2xl">
                    {heroDetails.title.site}
                  </p>
                </a>
              </div>
            </div>

            <div
              id="btn-container"
              className="grid items-center grid-cols-1 gap-4 py-1"
            >
              <Box>
                {" "}
                <a href={heroDetails.link.email}>{emailBtn}</a>
              </Box>
              <Box>
                {" "}
                <a href={heroDetails.link.linkedIn}>{linkedInBtn}</a>
              </Box>
            </div>
            <div id="hero-btns" className="flex gap-4 mt-10">
              <About />
              <Interests />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

const HeroImg = ({ id }: any) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isInView, setIsInView] = useState<boolean>(false);

  const handleInView = () => setIsInView(true);
  const handleLoading = () => setIsLoaded(true);

  return (
    <section id="hero-img">
      <motion.div
        initial={false}
        animate={
          isLoaded && isInView
            ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
            : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
        }
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true }}
        onViewportEnter={handleInView}
      >
        <Image
          src={`/${id}.jpg`}
          onLoad={handleLoading}
          alt={heroDetails.alt}
          layout="constrained"
          width={800}
          height={600}
          className="h-full w-full"
        />
      </motion.div>
    </section>
  );
};

import { IoIosMail } from "react-icons/io";
import { GrLinkedin } from "react-icons/gr";
import { Box, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const Hero = () => {
  const mailBtn = useColorModeValue("white", "black");
  const heroDetails = {
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

  const emailBtn = (
    <a href={heroDetails.link.email}>
      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        className="rounded-md text-white bg-black text-xl flex justify-center font-bold items-center h-[40px] w-[10em]  uppercase p-6 transition duration-500"
      >
        <IoIosMail className="mr-3 text-4xl" />
        {heroDetails.title.btn1}
      </motion.button>
    </a>
  );

  const linkedInBtn = (
    <a href={heroDetails.link.linkedIn}>
      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        className="p-6 rounded-md font-bold justify-center bg-[#486CE2] text-white text-xl flex items-center h-[40px] w-[10em] uppercase transition duration-500"
      >
        <GrLinkedin className="mr-3 text-3xl" />
        {heroDetails.title.btn2}
      </motion.button>
    </a>
  );

  return (
    <section id="hero">
      {/* PERF: rendering the image and sourcing from public using "id" attribute*/}
      <div id="hero-img">
        <HeroImg id={"me"} />
      </div>

      <motion.div
        id="hero-container"
        className="flex flex-col items-center content-center justify-center px-4 py-8"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <h3 id="title-name" className="text-[34px] font-extrabold">
          {heroDetails.title.name}
        </h3>
        <div className="self-center text-center pb-3">
          <p id="title-role" className="py-4 text-teal-700 dark:text-slate-400">
            {heroDetails.title.role}
          </p>

          <div id="website-container">
            <a href={heroDetails.link.site}>
              <p id="website-link" className="text-cyan-600">
                {heroDetails.title.site}
              </p>
            </a>
          </div>
        </div>

        <div
          id="btn-container"
          className="grid items-center grid-cols-1 gap-4 py-1"
        >
          <Box>{emailBtn}</Box>
          <Box>{linkedInBtn}</Box>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

// TEST: trying to animate hero-img
const HeroImg = ({ id }) => {
  const [isLoaded, setIsLoaded] = useState(true);
  const [isInView, setIsInView] = useState(false);

  return (
    <section>
      <motion.div
        initial={false}
        animate={
          isLoaded && isInView
            ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
            : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
        }
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true }}
        onViewportEnter={() => setIsInView(true)}
      >
        <img
          src={`/${id}.jpg`}
          srcSet={`/${id}.jpg 480w, /${id}.jpg 1080w`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onLoad={() => setIsLoaded(!true)}
          alt=""
          width={500}
          height={500}
        />
      </motion.div>
    </section>
  );
};

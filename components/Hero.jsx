import React from "react";
import { IoIosMail } from "react-icons/io";
import { GrLinkedin } from "react-icons/gr";
import { Box, useColorModeValue, Image } from "@chakra-ui/react";

const Hero = (props) => {
  const mailBtn = useColorModeValue("white", "black");

  return (
    <section>
      <div>
        <Image
          objectFit="cover"
          src="https://imagetolink.com/ib/RDzg5zPcyI.jpg"
          alt="Mbhoni portait"
          size="3xl" /* className="rounded-b-2xl" */
        />
      </div>

      <div className="flex flex-col items-center content-center justify-center px-4 py-8">
        <h3 className="text-[34px] font-extrabold">{props.name}</h3>
        <div className="self-center">
          <p className="py-4 text-teal-700 dark:text-slate-400">
            {props.title}
          </p>
          {/*<a className="text-cyan-600" href="#">
            Mbhoni Website
          </a>*/}
        </div>

        <div className="grid items-center grid-cols-1 gap-4 py-1">
          <Box>
            <button className="rounded-md text-white bg-black dark:bg-white dark:text-black text-xl flex justify-center font-bold items-center h-[40px] w-[10em]  uppercase p-6 hover:opacity-[0.7] hover:scale-[0.9] transition duration-500">
              <IoIosMail className="mr-4 text-4xl" />
              <a href={props.emailLink}>{props.email}</a>
            </button>
          </Box>

          <div className="">
            <button className="p-6 rounded-md font-bold justify-center bg-[#486CE2] text-white text-xl flex items-center h-[40px] w-[10em] uppercase hover:opacity-[0.7] hover:scale-[0.9] transition duration-500">
              <GrLinkedin className="mr-4 text-3xl" />
              <a href={props.linkedinLink}>{props.linkedin}</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

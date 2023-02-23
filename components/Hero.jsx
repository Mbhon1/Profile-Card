import Image from "next/image";
import React from "react";
import me from "public/me.jpeg";
import { IoIosMail } from "react-icons/io";
import { GrLinkedin } from "react-icons/gr";

const Hero = (props) => {
  return (
    <section>
      <div>
        <Image src={me} alt="Mbhoni portait" />
      </div>

      <div className="flex flex-col items-center content-center justify-center px-4 py-8">
        <h3 className="text-[34px] font-extrabold">{props.name}</h3>
        <div className="self-center">
          <p className="py-4 text-gray-600">{props.title}</p>
          <a className="text-cyan-600" href="#">
            Mbhoni Website
          </a>
        </div>

        <div className="grid items-center grid-cols-1 gap-4 py-8">
          <div className="">
            <button className="rounded-md bg-white text-black text-xl flex justify-center font-bold items-center h-[40px] w-[10em]  uppercase p-6 hover:opacity-[0.7] hover:scale-[0.9] transition duration-500">
              <IoIosMail className="mr-4 text-4xl" />
              <a href="mailto:mbhonibaloyi9@gmail.com">{props.email}</a>
            </button>
          </div>

          <div className="">
            <button className="p-6 rounded-md font-bold justify-center bg-[#486CE2] text-white text-xl flex items-center h-[40px] w-[10em] uppercase hover:opacity-[0.7] hover:scale-[0.9] transition duration-500">
              <GrLinkedin className="mr-4 text-3xl" />
              <a href="https://www.linkedin.com/in/mbhoni-baloyi-6870ba175">
                {props.linkedin}
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

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

      <div className="flex flex-col items-center justify-center px-4 py-8">
        <div>
          <h3 className="text-3xl font-bold ">{props.name}</h3>
          <p className="py-5 text-gray-600">{props.title}</p>
          <a className="text-cyan-600" href="#">
            Mbhoni Website
          </a>
        </div>

        <div className="grid items-center grid-cols-1 gap-4 py-8">
          <div className="">
            <button className="border rounded-md bg-white text-black text-xl flex justify-center items-center h-[40px] w-[10em]  uppercase p-6">
              <IoIosMail className="mr-4 text-4xl" />
              <a href="mailto:mbhonibaloyi9@gmail.com">{props.email}</a>
            </button>
          </div>

          <div className="grid items-center grid-cols-1">
            <button className="border p-6 rounded-md justify-center bg-white text-black text-xl flex items-center h-[40px] w-[10em] uppercase">
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

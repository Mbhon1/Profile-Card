import React from "react";
import { FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex mt-7 flex-col items-center bg-black rounded-t-lg">
      <footer className="flex gap-9 text-teal-700 p-[15px] text-4xl">
        <a
          className="hover:opacity-[0.7] hover:scale-[1.3] transition duration-500"
          href="https://www.twitter.com/print_whoami/"
        >
          <FaTwitter />
        </a>

        <a
          className="hover:opacity-[0.7] hover:scale-[1.3] transition duration-500"
          href="https://www.instagram.com/return.whoami/"
        >
          <FaInstagram />
        </a>

        <a
          className="hover:opacity-[0.7] hover:scale-[1.3] transition duration-500"
          href="https://github.com/mbhon1/"
        >
          <FaGithub />
        </a>
      </footer>
    </div>
  );
};

export default Footer;

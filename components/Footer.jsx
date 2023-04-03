import React from "react";
import { FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import { Box, useColorModeValue } from "@chakra-ui/react";

const Footer = () => {
  const footerBg = useColorModeValue("gray.400", "blackAlpha.900");

  return (
    <Box bg={footerBg} className="flex mt-7 flex-col items-center rounded-t-lg">
      <footer className="flex gap-9 text-teal-900 p-[15px] text-4xl">
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
    </Box>
  );
};

export default Footer;

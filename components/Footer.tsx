import React from "react";
import { FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import { Box, useColorModeValue } from "@chakra-ui/react";
import { FootLinks } from "./constants";

const Footer = () => {
  const footerBg = useColorModeValue("gray.400", "blackAlpha.900");
  const footLinks: FootLinks[] = [
    {
      icon: <FaTwitter />,
      link: "https://www.twitter.com/print_whoami/",
    },
    {
      icon: <FaInstagram />,
      link: "https://www.instagram.com/return.whoami/",
    },
    {
      icon: <FaGithub />,
      link: "https://github.com/mbhon1/",
    },
  ];

  const footIcons: JSX.Element[] = footLinks.map(
    (icons: FootLinks, index: number) => {
      return (
        <a
          href={icons.link}
          key={index}
          className="hover:opacity-[0.7] hover:scale-[1.3] transition duration-500"
        >
          {icons.icon}
        </a>
      );
    },
  );

  return (
    <Box bg={footerBg} className="flex mt-7 flex-col items-center rounded-t-lg">
      <footer className="flex gap-9 text-teal-900 p-[15px] text-4xl">
        {footIcons}
      </footer>
    </Box>
  );
};

export default Footer;

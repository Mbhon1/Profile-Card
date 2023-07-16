import { Flex, Spacer, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { Toggler } from "./Toggler";

const Navbar = () => {
  const navBg = useColorModeValue("white", "blackAlpha.900");
  const title: string = "Profile Card"
  const logo = (
    <Link href={"/"}>
      <div>
        <h2 className="text-[1.5rem] md:text-[2.2rem]">{title}</h2>
      </div>
    </Link>
  );

  return (
    <section id="navbar">
      <Flex
        h="10vh"
        alignItems="center"
        p={4}
        position="sticky"
        top={0}
        zIndex="sticky"
        w="full"
        bg={navBg}
      >
        {logo}
        <Spacer />
        <div id="navbar-toggle">
          <Toggler />
        </div>
      </Flex>
    </section>
  );
};

export default Navbar;

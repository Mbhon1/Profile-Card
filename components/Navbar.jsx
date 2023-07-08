import {
  Flex,
  Spacer,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { Toggler } from "./Toggler";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const navBg = useColorModeValue("white", "blackAlpha.900");
  const logo = (
    <Link href={"/"}>
      <div className="text-[1.5rem]">Profile Card</div>
    </Link>
  );

  return (
    <>
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
        <div>
          <Toggler />
        </div>
      </Flex>
    </>
  );
};

export default Navbar;

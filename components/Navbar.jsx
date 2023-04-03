import {
  Flex,
  Spacer,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { Toggler } from "./Toggler";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const navBg = useColorModeValue("white", "blackAlpha.900");

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
        <Text fontSize="xl" fontWeight="bold">
          Profile Card
        </Text>
        <Spacer />
        <div>
          <Toggler />
        </div>
      </Flex>
    </>
  );
};

export default Navbar;

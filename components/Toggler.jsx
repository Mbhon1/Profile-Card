import { useColorMode, IconButton } from "@chakra-ui/react";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";

export const Toggler = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div>
      <IconButton
        aria-label="Dark Mode"
        mr={10}
        p={5}
        _hover={{ bg: "transparent" }}
        _active={{ bg: "transparent" }}
        style={{ boxShadow: "none" }}
        onClick={toggleColorMode}
        variant="ghost"
        {...props}
      >
        {colorMode === "light" ? <BsFillMoonStarsFill /> : <BsFillSunFill />}
      </IconButton>
    </div>
  );
};
